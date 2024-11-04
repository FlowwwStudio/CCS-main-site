class Application {
  constructor(canvasElement) {
      this.canvas = canvasElement;
      this.ctx = this.canvas.getContext('2d');
      
      // Update canvas size to match its parent element
      const parent = this.canvas.parentElement;
      this.canvas.width = parent.clientWidth;
      this.canvas.height = parent.clientHeight;
      this.canvas.style.backgroundColor = 'transparent';

      // Initialize properties
      this.images = [];
      this.loadedImages = 0;
      this.currentFrameIndex = 0;

      // Read data attributes
      this.readDataAttributes();

      // Start loading images
      this.loadImages();
  }

  readDataAttributes() {
      // Check for sequential images
      const totalFramesAttr = this.canvas.getAttribute('data-total-frames');
      const imageUrlFormatAttr = this.canvas.getAttribute('data-image-url-format');

      if (totalFramesAttr && imageUrlFormatAttr) {
          this.totalImages = parseInt(totalFramesAttr, 10);
          this.imageUrlFormat = imageUrlFormatAttr;
          this.imageUrls = null; // Not using a URL list
      } else {
          // Check for image URLs list
          const imageUrlsAttr = this.canvas.getAttribute('data-image-urls');
          if (imageUrlsAttr) {
              try {
                  this.imageUrls = JSON.parse(imageUrlsAttr);
                  this.totalImages = this.imageUrls.length;
              } catch (e) {
                  console.error(`Invalid JSON in data-image-urls for canvas "${this.canvas.id}":`, e);
                  this.totalImages = 0;
              }
          } else {
              console.error(`Canvas element with id "${this.canvas.id}" is missing required data attributes.`);
              this.totalImages = 0;
          }
      }

      // Read the trigger selector
      const triggerSelector = this.canvas.getAttribute('data-trigger');
      if (triggerSelector) {
          this.triggerElement = document.querySelector(triggerSelector);
          if (!this.triggerElement) {
              console.error(`Trigger element not found for selector "${triggerSelector}"`);
          }
      } else {
          // If no trigger is specified, default to the window
          this.triggerElement = window;
      }

      // Read the start and end points
      const startAttr = this.canvas.getAttribute('data-start');
      const endAttr = this.canvas.getAttribute('data-end');

      this.startFraction = startAttr ? parseFloat(startAttr) : 0;
      this.endFraction = endAttr ? parseFloat(endAttr) : 1;

      if (isNaN(this.startFraction) || isNaN(this.endFraction)) {
          console.error(`Invalid data-start or data-end for canvas "${this.canvas.id}". Using defaults (start: 0, end: 1).`);
          this.startFraction = 0;
          this.endFraction = 1;
      }

      // Ensure startFraction is less than endFraction
      if (this.startFraction >= this.endFraction) {
          console.error(`data-start should be less than data-end for canvas "${this.canvas.id}". Using defaults (start: 0, end: 1).`);
          this.startFraction = 0;
          this.endFraction = 1;
      }
  }

  loadImages() {
      if (this.totalImages <= 0) return;

      if (this.imageUrls) {
          // Load images from the provided URLs list
          this.imageUrls.forEach((url, i) => {
              this.loadImage(url, i);
          });
      } else if (this.imageUrlFormat) {
          // Load sequential images based on the format
          for (let i = 0; i < this.totalImages; i++) {
              const frameNumber = String(i).padStart(5, '0');
              const url = this.imageUrlFormat.replace('{frame}', frameNumber);
              this.loadImage(url, i);
          }
      }
  }

  loadImage(url, index) {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
          this.loadedImages++;
          if (this.loadedImages === this.totalImages) {
              console.log(`All images loaded for canvas: ${this.canvas.id}`);
              this.addEventListeners();
              this.render();
          }
      };

      img.onerror = (e) => {
          console.error(`Error loading image ${index} for canvas ${this.canvas.id}:`, e);
      };

      console.log(`Canvas "${this.canvas.id}" loading image: ${url}`);
      img.src = url;
      this.images.push(img);
  }

  addEventListeners() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
  }

  handleScroll = () => {
      if (!this.triggerElement) return;

      // Calculate scroll position relative to the trigger element
      const rect = this.triggerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementHeight = this.triggerElement.offsetHeight;

      // Determine the total scrollable area for the trigger
      const totalScrollable = windowHeight + elementHeight;

      // Calculate how much of the trigger element has been scrolled
      let scrollFraction = (windowHeight - rect.top) / totalScrollable;

      // Clamp the scrollFraction between 0 and 1
      scrollFraction = Math.min(1, Math.max(0, scrollFraction));

      // Adjust scrollFraction based on start and end fractions
      if (scrollFraction < this.startFraction) {
          scrollFraction = 0;
      } else if (scrollFraction > this.endFraction) {
          scrollFraction = 1;
      } else {
          // Normalize the scrollFraction between start and end
          scrollFraction = (scrollFraction - this.startFraction) / (this.endFraction - this.startFraction);
      }

      const frameIndex = Math.min(
          this.totalImages - 1,
          Math.floor(scrollFraction * this.totalImages)
      );

      if (frameIndex !== this.currentFrameIndex) {
          this.currentFrameIndex = frameIndex;
          this.render();
      }
  };

  handleResize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.render();
  };

  render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const img = this.images[this.currentFrameIndex];
      if (!img) return;

      const canvasRatio = this.canvas.width / this.canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

      if (canvasRatio > imgRatio) {
          drawWidth = this.canvas.width;
          drawHeight = drawWidth / imgRatio;
          offsetY = (this.canvas.height - drawHeight) / 2;
      } else {
          drawHeight = this.canvas.height;
          drawWidth = drawHeight * imgRatio;
          offsetX = (this.canvas.width - drawWidth) / 2;
      }

      this.ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }
}

// Initialize Application instances for all canvases
window.onload = () => {
  const canvases = document.querySelectorAll('.canvas_scroll-animation');
  canvases.forEach((canvasElement) => {
      new Application(canvasElement);
  });
};