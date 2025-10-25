#!/bin/bash

# AI Chat Feature - Quick Start Script
# This script helps you verify everything is set up correctly

echo "🚀 AI Chat Feature - Setup Verification"
echo "========================================"
echo ""

# Check if .env exists
if [ -f ".env" ]; then
    echo "✅ .env file found"
    
    # Check if API key is set
    if grep -q "your_groq_api_key_here" .env; then
        echo "⚠️  Please update your GROQ API key in .env file"
        echo "   Get your free key from: https://console.groq.com/keys"
        echo ""
    else
        echo "✅ API key appears to be set"
    fi
else
    echo "❌ .env file not found"
    echo "   Creating .env file..."
    echo "REACT_APP_GROQ_API_KEY=your_groq_api_key_here" > .env
    echo "⚠️  Please add your GROQ API key to .env file"
fi

echo ""
echo "📦 Checking dependencies..."
if [ -d "node_modules/groq-sdk" ]; then
    echo "✅ groq-sdk installed"
else
    echo "❌ groq-sdk not found. Run: npm install"
fi

echo ""
echo "📁 Checking components..."
if [ -f "src/components/AIChat/ChatPanel.js" ]; then
    echo "✅ ChatPanel component found"
else
    echo "❌ ChatPanel component missing"
fi

if [ -f "src/lib/prompts.js" ]; then
    echo "✅ Personality prompts found"
else
    echo "❌ Personality prompts missing"
fi

if [ -f "src/setupProxy.js" ]; then
    echo "✅ API proxy configured"
else
    echo "❌ API proxy missing"
fi

echo ""
echo "========================================"
echo "Next Steps:"
echo "1. Add your Groq API key to .env"
echo "2. Customize your personality in src/lib/prompts.js"
echo "3. Run: npm start"
echo "4. Click the golden chat button!"
echo ""
echo "📖 See AI_CHAT_SETUP.md for detailed instructions"
echo "========================================"
