#!/bin/bash

# Deployment Script for 3D Portfolio
# Run this script to prepare and deploy your portfolio

echo "🚀 Preparing 3D Portfolio for Deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Show build size
    echo "📊 Build size:"
    du -sh dist/
    
    echo ""
    echo "🎯 Deployment Options:"
    echo "1. Vercel: Drag dist/ folder to vercel.com"
    echo "2. Netlify: Drag dist/ folder to netlify.com"
    echo "3. Firebase: Run 'firebase deploy'"
    echo "4. GitHub Pages: Push to main branch"
    echo ""
    echo "📁 Your dist/ folder is ready for deployment!"
    echo "🌐 Upload the entire dist/ folder contents to your hosting provider"
    
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi
