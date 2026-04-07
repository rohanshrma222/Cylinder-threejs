import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = path.join(process.cwd(), 'public', 'images', 'slider-image.png');
const outputImagePath = path.join(process.cwd(), 'public', 'images', 'slider-image-resized.png');

async function resizeImage() {
  try {
    console.log('Reading image dimensions...');
    const metadata = await sharp(inputImagePath).metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}`);
    
    // Most WebGL implementations have a max texture size of 4096 or 8192 or 16384. 
    // Usually, 2048 or 4096 is safe and performs well.
    const MAX_WIDTH = 2048;

    if (metadata.width > MAX_WIDTH) {
      console.log(`Resizing to a safe WebGL texture width of ${MAX_WIDTH}px...`);
      await sharp(inputImagePath)
        .resize({ width: MAX_WIDTH })
        .toFile(outputImagePath);
      console.log('Saved resized image to slider-image-resized.png');
      
      // Let's replace the original file
      fs.copyFileSync(outputImagePath, inputImagePath);
      console.log('Overwrote original slider-image.png');
    } else {
      console.log('Image is already at a safe width.');
    }
  } catch (error) {
    console.error('Error resizing image:', error);
  }
}

resizeImage();
