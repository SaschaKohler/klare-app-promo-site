#!/bin/bash

# Create favicon conversion script
# This script requires ImageMagick, if not installed run: brew install imagemagick

# Path to the SVG favicon
SVG_PATH="./public/favicon.svg"
OUTPUT_DIR="./public"

# Create ICO version
convert -density 256x256 -background transparent "$SVG_PATH" -define icon:auto-resize=16,32,48,64,128 "$OUTPUT_DIR/favicon.ico"

# Create PNG versions for different sizes
convert -density 128x128 -background transparent "$SVG_PATH" -resize 16x16 "$OUTPUT_DIR/favicon-16x16.png"
convert -density 128x128 -background transparent "$SVG_PATH" -resize 32x32 "$OUTPUT_DIR/favicon-32x32.png"
convert -density 128x128 -background transparent "$SVG_PATH" -resize 48x48 "$OUTPUT_DIR/favicon-48x48.png"
convert -density 256x256 -background transparent "$SVG_PATH" -resize 192x192 "$OUTPUT_DIR/android-chrome-192x192.png"
convert -density 512x512 -background transparent "$SVG_PATH" -resize 512x512 "$OUTPUT_DIR/android-chrome-512x512.png"
convert -density 256x256 -background transparent "$SVG_PATH" -resize 180x180 "$OUTPUT_DIR/apple-touch-icon.png"

echo "Favicon images created successfully!"