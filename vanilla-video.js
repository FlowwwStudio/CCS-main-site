// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initVideoAnimations);

function initVideoAnimations() {
  const triggers = Array.from(document.querySelectorAll("[fs-video^='trigger']"));
  const playVideos = Array.from(document.querySelectorAll("[fs-video^='play']"));

  // Handle scrub videos
  triggers.forEach(trigger => {
    const scrubTypes = ['scrub', 'scrub-special', 'scrub-small', 'scrub-pump1'];
    
    scrubTypes.forEach(type => {
      const video = trigger.querySelector(`[fs-video='${type}']`);
      if (video) {
        const duration = parseFloat(video.getAttribute("fs-duration")) || 0;
        video.currentTime = 0;
        // Ensure video is loaded before setting up scroll handling
        video.addEventListener('loadedmetadata', () => {
          setupScrollBasedVideo(video, trigger, type, duration);
        });
        // Preload the video
        video.preload = 'auto';
        // Prevent default video controls
        video.controls = false;
      }
    });
  });

  // Handle autoplay videos with Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });

  playVideos.forEach(video => observer.observe(video));
}

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function setupScrollBasedVideo(video, trigger, type, duration) {
  let config = getScrollConfig(type);
  let currentProgress = 0;
  let targetProgress = 0;
  let animationFrame;
  let isScrolling = false;
  let scrollTimeout;
  
  function updateVideoTime() {
    const triggerRect = trigger.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate start and end positions based on config
    const startPos = windowHeight * (parseFloat(config.start) / 100);
    const endPos = windowHeight * (parseFloat(config.end) / 100);
    
    // Calculate target progress
    targetProgress = (startPos - triggerRect.top) / (startPos - endPos);
    targetProgress = Math.max(0, Math.min(1, targetProgress)); // Clamp between 0 and 1
    
    // Smoothly interpolate current progress
    currentProgress = lerp(currentProgress, targetProgress, 0.1);
    
    // Apply video time with smoother interpolation
    const targetTime = currentProgress * duration;
    video.currentTime = Math.min(video.duration, Math.max(0, targetTime));

    // Continue animation if we haven't reached the target
    if (Math.abs(currentProgress - targetProgress) > 0.001 || isScrolling) {
      animationFrame = requestAnimationFrame(updateVideoTime);
    }
  }

  // Special handling for pump1 type
  if (type === 'scrub-pump1') {
    const imageWrapper = document.querySelector('.pump1_image-wrapper');
    if (imageWrapper) {
      let currentTranslateY = 0;
      let targetTranslateY = 0;

      function updateImagePosition() {
        const rect = trigger.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (progress > 0.5 && progress < 0.75) {
          targetTranslateY = (progress - 0.5) * 20;
        }
        
        currentTranslateY = lerp(currentTranslateY, targetTranslateY, 0.1);
        imageWrapper.style.transform = `translateY(${currentTranslateY}%)`;
        
        if (Math.abs(currentTranslateY - targetTranslateY) > 0.001 || isScrolling) {
          requestAnimationFrame(updateImagePosition);
        }
      }

      window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
        requestAnimationFrame(updateImagePosition);
      });
    }
  }

  // Add scroll listener with debouncing
  window.addEventListener('scroll', () => {
    isScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 150);

    if (!animationFrame) {
      animationFrame = requestAnimationFrame(updateVideoTime);
    }
  });

  // Initial update
  updateVideoTime();
}

function getScrollConfig(type) {
  const configs = {
    'scrub': { start: '10', end: '85' },
    'scrub-special': { start: '5', end: '55' },
    'scrub-small': { start: '35', end: '35' },
    'scrub-pump1': { start: '35', end: '35' }
  };
  return configs[type] || configs['scrub'];
} 