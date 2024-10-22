gsap.registerPlugin(ScrollTrigger);

const animations = [
  {
    trigger: ".lashing_intro-animation_trigger",
    imgSelector: "#animationImage1",
    images: [
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da6493747145d19525_ship-and-container_00000.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da188a12cb89738c6a_ship-and-container_00001.webp',   
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da017ceb2f8ea9d750_ship-and-container_00002.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da9f3275504623e71c_ship-and-container_00003.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da588658aef12fc036_ship-and-container_00004.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1daf367de40bed87c95_ship-and-container_00005.webp',
        'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da0d07a785162b25eb_ship-and-container_00006.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dad76cda9208f7808b_ship-and-container_00007.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dad76cda9208f7808f_ship-and-container_00008.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da7bb7c8630be73bf1_ship-and-container_00009.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da240cba58e1174f66_ship-and-container_00010.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da7294daf1eebecaa2_ship-and-container_00011.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da240cba58e1174f72_ship-and-container_00012.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1daa586ff2befcd5f01_ship-and-container_00013.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da14c39bfea0936e2d_ship-and-container_00014.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da0d659204005e7171_ship-and-container_00015.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da9cd82faa938bc023_ship-and-container_00016.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dab376b569f801c941_ship-and-container_00017.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da37085196d42c3daa_ship-and-container_00018.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dacdd7174a218e9d24_ship-and-container_00019.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1daf1e541413af6ca69_ship-and-container_00020.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da68732e1d144d8c7a_ship-and-container_00021.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dabcb5aebdb1496c0c_ship-and-container_00022.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da7294daf1eebecb0e_ship-and-container_00023.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da0d659204005e71c6_ship-and-container_00024.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dabcb5aebdb1496c29_ship-and-container_00025.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dae6e7559ec07f7181_ship-and-container_00026.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da37085196d42c3e09_ship-and-container_00027.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da777a77da89bdc0d9_ship-and-container_00028.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da43533461114a6e10_ship-and-container_00029.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da04557e36d6467b6e_ship-and-container_00030.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db37b0240ea751fdc0_ship-and-container_00031.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1da68732e1d144d8c97_ship-and-container_00032.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbf1e541413af6d17f_ship-and-container_00033.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db54e28923d1548e50_ship-and-container_00034.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbeeadec053e828b28_ship-and-container_00035.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db7294daf1eebecb44_ship-and-container_00036.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbf1e541413af6d17c_ship-and-container_00037.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db04557e36d6467b8e_ship-and-container_00038.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbd76cda9208f7812e_ship-and-container_00039.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db970a34a2b7edbdb8_ship-and-container_00040.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db43533461114a6e55_ship-and-container_00041.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbb3d3434dc32e4dd1_ship-and-container_00042.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db240cba58e1174fbf_ship-and-container_00043.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbb376b569f801ca21_ship-and-container_00044.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db188a12cb89739028_ship-and-container_00045.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db777a77da89bdc114_ship-and-container_00046.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbe64cbb3440093fb7_ship-and-container_00047.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbad2ce77ba76dfc00_ship-and-container_00048.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db188a12cb8973907b_ship-and-container_00049.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db2d205b0ae29f2fa4_ship-and-container_00050.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1dbd34c8f513aa25273_ship-and-container_00051.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db37b0240ea751fe1a_ship-and-container_00052.webp',
      'https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/6714f1db43533461114a71d0_ship-and-container_00053.webp'
    ],
  },
  {
    trigger: ".lashing_fat-animation_trigger",
    imgSelector: "#animationImage2",
    images: [
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b44492a4081668b72_FAT_00000.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ac726bc817d2a596e_FAT_00001.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8acdd7174a21e17ed3_FAT_00002.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b88594e57985ca83f_FAT_00003.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b7bb7c8630b389543_FAT_00004.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b970a34a2b740b0df_FAT_00005.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b970a34a2b740b0dc_FAT_00006.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8a07e7fb1e8ddf09ce_FAT_00007.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ab37a32f88fe466bd_FAT_00008.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8aa9e4b0454b5221ea_FAT_00009.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b78a3dccbef05e287_FAT_00010.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bcdd7174a21e17f05_FAT_00011.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b04557e36d6967d69_FAT_00012.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bd76cda92084c9eed_FAT_00013.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b331f9a60415d9d41_FAT_00014.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bcb7b001ecb393423_FAT_00015.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b4e0de2cd568be78c_FAT_00016.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b07e7fb1e8ddf09e5_FAT_00017.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8be034eba5688a3cc6_FAT_00018.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bafb0367a86ef6a24_FAT_00019.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b81737b2fff24da80_FAT_00020.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bbcf82aa25ada0687_FAT_00021.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b970a34a2b740b11e_FAT_00022.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b44f29fdd832758d3_FAT_00023.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b822287f94119dc62_FAT_00024.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bb37a32f88fe466fe_FAT_00025.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b78a3dccbef05e2e6_FAT_00026.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8be034eba5688a3cde_FAT_00027.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bbcf82aa25ada068a_FAT_00028.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b3e2b509cffac8abe_FAT_00029.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b8227a5cdb3b25c6a_FAT_00030.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bbcf82aa25ada06a2_FAT_00031.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b8464a497a856d1b4_FAT_00032.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b78a3dccbef05e30a_FAT_00033.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b116b8898941239ee_FAT_00034.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c43abe29f9ea64377_FAT_00035.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c04557e36d69687f7_FAT_00036.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c04557e36d69687fe_FAT_00037.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8bdb661e4e02a5af78_FAT_00038.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b97866e3c25698fee_FAT_00039.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c97866e3c25699027_FAT_00040.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c49c54b2b698b571d_FAT_00041.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8cb37a32f88fe46781_FAT_00042.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8da9e4b0454b522c57_FAT_00043.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c49c54b2b698b5715_FAT_00044.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ce034eba5688a3d62_FAT_00045.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d4e0de2cd568bf664_FAT_00046.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8b88594e57985caa01_FAT_00047.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8cb3d3434dc37efb7f_FAT_00048.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8defd721940ca4e999_FAT_00049.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c44f29fdd832762bd_FAT_00050.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8caf32c8a7c4b5d765_FAT_00051.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ccb7b001ecb393528_FAT_00052.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c44492a40816695bb_FAT_00053.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c116b889894123a45_FAT_00054.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ce701ddc6710e0d38_FAT_00055.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8cb3d3434dc37f0055_FAT_00056.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c81737b2fff24db54_FAT_00057.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d8464a497a856d74a_FAT_00058.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c331f9a60415da2ab_FAT_00059.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d1ef5c1ab91c168d9_FAT_00060.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8c81737b2fff24db57_FAT_00061.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8de701ddc6710e0e13_FAT_00062.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8daf32c8a7c4b5dc68_FAT_00063.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d49c54b2b698b581b_FAT_00064.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d81737b2fff24dbd2_FAT_00065.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d268db1bfd3bb6a54_FAT_00066.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e39aea195fd30b8fb_FAT_00067.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8da9e4b0454b523180_FAT_00068.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d690cf1c9e9780626_FAT_00069.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8d07e7fb1e8ddf103f_FAT_00070.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e8227a5cdb3b26b8f_FAT_00071.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8eefd721940ca4ef7a_FAT_00072.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e116b8898941240c9_FAT_00073.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ecb7b001ecb393aaa_FAT_00074.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8fe716bcdd2ffc04b5_FAT_00075.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8eb3c128a2cfed4c8a_FAT_00076.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e4a9c4e45ec4dcfd8_FAT_00077.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8f4e0de2cd568bfc1f_FAT_00078.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e78a3dccbef05e907_FAT_00079.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e44f29fdd8327696d_FAT_00080.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8ed76cda92084cb03e_FAT_00081.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8f116b889894124147_FAT_00082.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8fe716bcdd2ffc04b1_FAT_00083.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8f1ef5c1ab91c16990_FAT_00084.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8f822287f94119ea1b_FAT_00085.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e79848e760354aad8_FAT_00086.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8eb3d3434dc37f0151_FAT_00087.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8e20ab3a9822fce93f_FAT_00088.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c8fdb661e4e02a5b697_FAT_00089.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90d76cda92084cbd18_FAT_00090.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90bcf82aa25ada1840_FAT_00091.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90331f9a60415da4ed_FAT_00092.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90e701ddc6710e15d4_FAT_00093.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c903e2b509cffac9ce5_FAT_00094.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9039aea195fd30bf8f_FAT_00095.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c901ef5c1ab91c16a8b_FAT_00096.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90116b889894124241_FAT_00097.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90331f9a60415da4f1_FAT_00098.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c908732075457bd80b2_FAT_00099.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90331f9a60415da518_FAT_00100.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9044f29fdd83276ac7_FAT_00101.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90afb0367a86ef7faa_FAT_00102.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9097866e3c25699909_FAT_00103.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9120ab3a9822fcec36_FAT_00104.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c916268749113aff4b7_FAT_00105.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c91b37a32f88fe47371_FAT_00106.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90b3c128a2cfed4ecb_FAT_00107.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c908732075457bd8101_FAT_00108.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c90d76cda92084cc185_FAT_00109.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95bce91e7d6d889d73_FAT_00110.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95e716bcdd2ffc0de4_FAT_00111.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9597866e3c25699fc7_FAT_00112.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c958464a497a856e7f6_FAT_00113.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95e701ddc6710e18a7_FAT_00114.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9581737b2fff24e3da_FAT_00115.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9504557e36d6968cd7_FAT_00116.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9581737b2fff24e3df_FAT_00117.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c954a9c4e45ec4dd67c_FAT_00118.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c959cd82faa93dfb2c6_FAT_00119.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95268db1bfd3bb71fb_FAT_00120.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9539aea195fd30c59a_FAT_00121.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95b37a32f88fe4775d_FAT_00122.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c96bce91e7d6d889dd2_FAT_00123.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95e034eba5688a52c6_FAT_00124.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95cb7b001ecb3945b8_FAT_00125.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c95822287f94119ed54_FAT_00126.webp"
    ],
  },
  {
    trigger: ".lashing_lashing-lifting-animation_trigger",
    imgSelector: "#animationImage3",
    images: [
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65bce91e7d6d885fe1_lashing-lifting_00000.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6544492a4081666e84_lashing-lifting_00001.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6544492a4081666e71_lashing-lifting_00002.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65bce91e7d6d886028_lashing-lifting_00003.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65e716bcdd2ffbddf5_lashing-lifting_00004.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c650d07a785167fd000_lashing-lifting_00005.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6504557e36d69663e6_lashing-lifting_00006.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65e701ddc6710ded19_lashing-lifting_00007.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c650fa55ed45dd7b554_lashing-lifting_00008.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c656268749113afd077_lashing-lifting_00009.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6539aea195fd30781b_lashing-lifting_00010.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c653e2b509cffac7429_lashing-lifting_00011.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6539aea195fd30781b_lashing-lifting_00012.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65116b889894121fc3_lashing-lifting_00013.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c650fa55ed45dd7b554_lashing-lifting_00014.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65d76cda92084c8051_lashing-lifting_00015.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65690cf1c9e977dbef_lashing-lifting_00016.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6588594e57985c8c3a_lashing-lifting_00017.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c659cd82faa93df8e35_lashing-lifting_00018.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65970a34a2b7408d43_lashing-lifting_00019.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6520ab3a9822fcc340_lashing-lifting_00020.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c658732075457bd5a5b_lashing-lifting_00021.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6620ab3a9822fcc377_lashing-lifting_00022.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c669cd82faa93df8faf_lashing-lifting_00023.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65970a34a2b7408d43_lashing-lifting_00024.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65efd721940ca4a9f6_lashing-lifting_00025.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c654e0de2cd568bcf1e_lashing-lifting_00026.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c6681737b2fff24c105_lashing-lifting_00027.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c66d76cda92084c8645_lashing-lifting_00028.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c65e701ddc6710ded4b_lashing-lifting_00029.webp"
        
    ],
  },
  {
    trigger: ".lashing_turnbuckle-extending-animation_trigger",
    imgSelector: "#animationImage4",
    images: [
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c974a9c4e45ec4dd715_Turnbuckle-extending_00000.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97b37a32f88fe477b9_Turnbuckle-extending_00001.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97d76cda92084cd152_Turnbuckle-extending_00002.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c976c8985495cb75ddb_Turnbuckle-extending_00003.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97e701ddc6710e1984_Turnbuckle-extending_00004.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97116b889894124c3e_Turnbuckle-extending_00005.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9704557e36d69699e8_Turnbuckle-extending_00006.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97cdd7174a21e19760_Turnbuckle-extending_00007.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c970fa55ed45dd7d938_Turnbuckle-extending_00008.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97bcf82aa25ada20b6_Turnbuckle-extending_00009.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97690cf1c9e97819a3_Turnbuckle-extending_00010.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97afb0367a86ef8426_Turnbuckle-extending_00011.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97331f9a60415dad21_Turnbuckle-extending_00012.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97331f9a60415dad1e_Turnbuckle-extending_00013.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97268db1bfd3bb72d6_Turnbuckle-extending_00014.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9744f29fdd83277b66_Turnbuckle-extending_00015.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9720ab3a9822fcf68d_Turnbuckle-extending_00016.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97af32c8a7c4b5f36a_Turnbuckle-extending_00017.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c977bb7c8630b389bf5_Turnbuckle-extending_00018.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9749c54b2b698b63e2_Turnbuckle-extending_00019.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9739aea195fd30cd55_Turnbuckle-extending_00020.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97af32c8a7c4b5f39e_Turnbuckle-extending_00021.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97cb7b001ecb3946a1_Turnbuckle-extending_00022.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97c726bc817d2a65ac_Turnbuckle-extending_00023.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c970fa55ed45dd7d9cd_Turnbuckle-extending_00024.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9707e7fb1e8ddf222e_Turnbuckle-extending_00025.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c978227a5cdb3b27b28_Turnbuckle-extending_00026.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c977bb7c8630b389c16_Turnbuckle-extending_00027.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c980fa55ed45dd7e074_Turnbuckle-extending_00028.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97afb0367a86ef8aa4_Turnbuckle-extending_00029.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c97c726bc817d2a65d5_Turnbuckle-extending_00030.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c987bb7c8630b389d09_Turnbuckle-extending_00031.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9849c54b2b698b6472_Turnbuckle-extending_00032.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c986268749113b00509_Turnbuckle-extending_00033.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c986c8985495cb75e8c_Turnbuckle-extending_00034.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c98cdd7174a21e1a470_Turnbuckle-extending_00035.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c9839aea195fd30ce4d_Turnbuckle-extending_00036.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c98970a34a2b740d383_Turnbuckle-extending_00037.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c988732075457bd854d_Turnbuckle-extending_00038.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c998732075457bd875a_Turnbuckle-extending_00039.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c98a9e4b0454b5243da_Turnbuckle-extending_00040.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c994a9c4e45ec4ddeba_Turnbuckle-extending_00041.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c99822287f94119fb6c_Turnbuckle-extending_00042.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c994a9c4e45ec4ddeb7_Turnbuckle-extending_00043.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c997bb7c8630b389fc6_Turnbuckle-extending_00044.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c99a9e4b0454b524597_Turnbuckle-extending_00045.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c999cd82faa93dfc1ef_Turnbuckle-extending_00046.webp",
            "https://s3.amazonaws.com/webflow-prod-assets/64be7e6dc2a60cecdf209737/67155c99db661e4e02a5c93d_Turnbuckle-extending_00047.webp"
    ],
  },
];

animations.forEach((animation) => {
    const { trigger, imgSelector, images } = animation;
    const frameCount = images.length;
  
    // Preload images
    const imageObjects = images.map((url) => {
      const img = new Image();
      img.src = url; // Preload all images
      return img;
    });
  
    const obj = { currentFrame: 0 };

    // Create an Intersection Observer to lazy load images
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = document.querySelector(imgSelector);
          img.src = images[obj.currentFrame]; // Load the current frame image
          observer.unobserve(entry.target); // Stop observing after loading
        }
      });
    });
  
    gsap.to(obj, {
      currentFrame: frameCount - 1,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          const img = document.querySelector(imgSelector);
          observer.observe(img); // Start observing the image for lazy loading
        },
      },
      onUpdate: () => {
        const img = document.querySelector(imgSelector);
        img.src = images[obj.currentFrame]; // Update the image source
      },
    });
  });