---
permalink: /
title: "BIO"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently a second-year master's student at New York University majoring in Computer Engineering. I worked with Prof. Anna Choromanska and Prof. Dube Parijat. Previously, I received my B.S. in Computer Science and Engineering from The Chinese University of Hong Kong(CUHK) advised by Prof. David Zhang and Prof. Rui Huang. My research interests are distributed machine learning/ applied machine learning/ federated machine learning. Currently, My research mainly focuses on accelerating the convergence speed of distributed machine learning systems using novel system schemes and machine learning methods. I will graduate from NYU in May 2023 and intend to apply for Ph.D. ECE/CS programs.

Educaton
======
- M.S. in Computer Engineering at New York University, 2020
  - Current GPA: 3.9/4.0, Rank: top3%
- B.S. in Computer Science and Engineering at The Chinese University of Hong Kong, 2020

News
======

- 2022-11: [Open-source](https://github.com/HectorHHZ/Adjacent_Leader_Dencentralized_SGD)  a  general framework to implement any centralized/ decentralized, synchronous/ asynchronous distributed SGD algorithms. The paper with novel distributed SGD optimizer will be submitted to ICML. 
- 2022-10: [One paper](https://arxiv.org/abs/2211.00889) submitted to Conference on Machine Learning and Systems (MLSys).
- 2022-10: [One paper](https://arxiv.org/abs/2211.00839) submitted to IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP).

- 2022-9: I started working with Prof. [Anna Choromanska](https://engineering.nyu.edu/faculty/anna-choromanska). Our research focuses on novel optimizer for decentralized distributed machine learning systems.

- 2022-5: I started working with Prof. [Dube Parijat](https://www.linkedin.com/in/parijatdube/). He is an adjunct professor at New York University and Columbia University. He is a research staff in IBM. Our research focuses on distributed machine learning systems. 

- 2021-11: [One paper](https://www.sciencedirect.com/science/article/pii/S0010482522001044) submitted and accepted by Computers in Biology and Medicine.

- 2020-10: I started working with Prof. [‪David Zhang, Dapeng‬‬](https://scholar.google.com/citations?hl=zh-CN&user=IOagLnEAAAAJ), doing research about applied machine learning for health care.

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
