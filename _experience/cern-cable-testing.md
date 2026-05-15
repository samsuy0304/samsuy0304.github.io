---
layout: post
title: "Testing Cables for CERN's CMS Detector"
role: "Research Assistant"
org: "Quality and Reliability Testing Lab"
date: 2022-05-01
---
 
From late 2020 to mid 2022, I worked as a research assistant helping test cables for the CMS (Compact Muon Solenoid) experiment at CERN — the same facility that confirmed the Higgs boson in 2012. My small piece of it: making sure tiny signal cables actually worked.
 
## What the cables did
 
The CMS detector tracks particles produced in proton-proton collisions by stacking layers of sensors. The innermost layer — the pixel detector — sits just centimeters from the collision point and generates enormous amounts of data. The cables I was testing were differential pair cables that connected the pixel modules to readout boards. Think of them as the nervous system routing raw detector signals out to electronics that could actually process them.
 
For these cables to work, their electrical impedance had to stay within a tight tolerance. Impedance is essentially a cable's resistance to alternating current, and it varies with frequency. If there's a mismatch between the cable's impedance and the electronics it connects to, some of the signal reflects back instead of passing through — like an echo. At the data rates CMS operates at (multiple Gbps), even small reflections degrade signal integrity enough to cause errors.
 
## How we tested them
 
The main tool was a [Vector Network Analyzer (VNA)](https://en.wikipedia.org/wiki/Network_analyzer_(electrical)), a piece of equipment that sweeps a signal across a range of frequencies and measures how much gets transmitted versus reflected. The output is S-parameter data — essentially a matrix of complex numbers describing the cable's behavior at each frequency point.
 
To visualize this, we used [Smith charts](https://en.wikipedia.org/wiki/Smith_chart) — a clever polar plot that maps impedance across frequencies in a way that makes it easy to see whether a cable is within spec. A perfect 100Ω differential impedance shows up as a tight cluster near the center. Anything drifting toward the edges is a problem.
 
We processed all of this in Python using the [scikit-rf library](https://scikit-rf.readthedocs.io/en/latest/) (`skrf`), which is built specifically for RF and microwave network analysis. It handles S-parameter files natively and has solid tooling for plotting and computation.
 
Alongside impedance testing we also ran visual inspections, DC resistance measurements, and bit error rate tests — the last one being the most direct check that data could actually move through the cable without corruption.
 
## What I built
 
The scripts we inherited were written for one specific cable configuration. Every time the cable type changed — different geometry, different length — someone had to manually edit the scripts before running tests. It was slow and easy to get wrong.
 
I rewrote the pipeline to be configuration-driven. Cable parameters went into a config file; the scripts read from that and handled everything else — loading the VNA output, running the analysis, generating reports. No manual editing between runs. Testing time dropped by around 70-80%.
 
I also applied a simple supervised learning model to help with equipment selection — using past test data to predict which measurement setup would give reliable results for a given cable type, which cut down on some of the guesswork in equipment choices.
 
## The actual lesson
 
I came in not knowing Python well, never having touched a VNA, and genuinely not understanding why impedance mattered. Most of what I learned came from reading the VNA manual, the skrf docs, and a lot of Stack Overflow. The postdoc supervising me was intentionally hands-off about it — which I resented at the time and appreciate now. Learning to navigate unfamiliar technical terrain without a guide is its own skill, and this project was where I first developed it.
