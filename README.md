# Learn Csound

A Jekyll-based website for learning Csound, using web Csound (Emscripten/PNaCl) to run Csound within the browser.

To view the site, please go to http://csound.github.io/learn-csound-site

# Creating Lessons

Lessons are located in the \_lessons folder.  Each lesson should be in its own folder and consist of two files: 

* index.md - Markdown file that contains the text for the lesson that appears on the right-hand side of the lesson page
* some.csd - CSD file that is loaded into the left-hand side of the lesson page

The index.md file should contain a csd: entry in its header that specifies the name of the CSD file to use. 


# Editing Locally 

## Requirements

1. Ruby
2. RubyGems - most ruby distributions should come with gem installed
3. Bundler - install using `gem install bundler`

## Instructions

First, make a clone of the project locally: 

    git clone git://github.com/csound/csound.github.io.git
    cd csound.github.io

From this directory, run Bundler to install the required gems:
    
    bundle install

This installed the github-pages gem.

To view the site locally with `jekyll`, run:

    bundle exec jekyll serve --watch --baseurl

This will start up a jekyll server. You can view the pages as they are rendered by Jekyll in your browser at:

    http://localhost:4000
    
Also, with the --watch command, anytime you change a page, you can view the updates by refreshing the browser.
