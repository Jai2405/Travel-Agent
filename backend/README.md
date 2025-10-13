# Travel Agent - AI-Powered Trip Planning System

This project contains a comprehensive travel planning system using MCP (Model Context Protocol) servers with AI agents for trip planning, flight finding, and activity planning.

## Features

- **Trip Planning**: AI agent determines optimal days to spend in each destination
- **Flight Search**: Automated flight finding with pricing and booking links
- **Activity Planning**: Comprehensive activity and food recommendations for each destination
- **Complete Integration**: All agents work together to create a full trip itinerary

## Prerequisites

Before running this project, you need:

1. **Node.js and npm** (for MCP servers)
2. **Python 3.8+**
3. **Brave Search API Key** (sign up at https://api.search.brave.com/)
4. **uvx** (install with `pip install uv`)

## Installation

1. **Clone/Download this project**
   ```bash
   cd /Users/jaivaderaa/travel-agent/Backend2
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Install required tools**
   ```bash
   # Install uv (if not already installed)
   pip install uv

   # Install MCP server dependencies (will be auto-installed when running)
   npm install -g @modelcontextprotocol/server-brave-search
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Brave Search API key:
   ```
   BRAVE_API_KEY=your_actual_brave_api_key_here
   ```

## Usage

### Running the Jupyter Notebook

1. **Start Jupyter**
   ```bash
   jupyter notebook
   ```

2. **Open `travel_agent.ipynb`**

3. **Run the cells sequentially** - the notebook is organized into sections:
   - Setup and imports
   - Data models
   - Trip planning agent
   - Flight finding agent
   - Activity planning agent
   - Complete trip planning function

### Customizing Your Trip

Modify these variables in the notebook:

```python
start_date = "2025-10-01"
end_date = "2025-10-04"
start_destination = "Toronto"
destinations = ["Nova Scotia"]
additional_info = ""  # Add any specific requirements
```

## How It Works

1. **Trip Divider Agent**: Analyzes destinations and determines optimal days to spend in each city
2. **Flight Finder Agent**: Searches for flights between all destinations with pricing
3. **Activity Planner Agent**: Researches and recommends activities and restaurants for each destination
4. **Integration**: All agents work together to create a comprehensive travel plan

## API Keys and Services

- **Brave Search API**: Used for web searches to find flights and activities
- **MCP Servers**: Provide web search capabilities to the AI agents
- **OpenAI GPT-4**: Powers the AI agents (uses gpt-4.1-mini model)

## Troubleshooting

1. **"uvx command not found"**: Install uv with `pip install uv`
2. **MCP server connection issues**: Ensure you have a stable internet connection and valid API keys
3. **Missing dependencies**: Run `pip install -r requirements.txt` again
4. **API rate limits**: If you hit rate limits, wait a few minutes between requests

## Example Output

The system will provide:
- Detailed itinerary with days per destination
- Flight options with airlines, times, and booking links
- Activity recommendations and restaurant suggestions
- Complete travel schedule

## Notes

- The system requires internet connectivity to search for flights and activities
- API calls may take 30-60 seconds per agent due to web search requirements
- Results are based on real-time web searches and may vary