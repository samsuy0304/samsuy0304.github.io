---
layout: post
title: "Can We Find Supersymmetry by Looking Where Nobody Looked?"
role: "Research Assistant"
org: "University of Kansas CMS Lab"
date: 2022-08-01
---

The Standard Model of particle physics is one of the most successful theories in science. It describes almost everything we've ever observed in a particle detector. But physicists have long suspected it's incomplete — that there's a deeper layer of reality underneath.

One of the leading candidates for what lies beyond is Supersymmetry, or SUSY. It predicts that every known particle has a heavier partner. Finding one would be a landmark discovery — it would help explain several open mysteries in physics, including the nature of dark matter.

The LHC has been searching for these particles for over a decade. So far, nothing.

## Why It Might Be Hiding

Most SUSY searches are designed around a straightforward assumption: if a heavy superparticle decays, it produces high-energy debris. High energy means loud signals. Loud signals are easy to find.

But there's a scenario called the compressed spectrum, where the superparticle and the particle it decays into have nearly the same mass. With almost no mass difference to convert into energy, the decay products come out slow and quiet. In the specific decay we were studying — a top squark decaying into a neutralino — the mass gap was just 10 GeV. The electrons produced in the process had transverse momenta below 5 GeV.

Here's the problem: the CMS detector at CERN doesn't identify electrons that slow. Its standard algorithms require electrons to have pT > 5 GeV. Below that, they're discarded. Treated as noise.

If compressed SUSY exists, we were already throwing away the evidence.

## The Background Problem

To make things harder, the signal we were looking for is almost indistinguishable from one of the most common processes at the LHC: top quark pair production (tt̄). Both produce two b-jets, two leptons, and missing energy from particles that escape the detector undetected. In the signal, the missing energy comes from neutralinos. In the background, it comes from neutrinos. The detector can't tell the difference directly.

And tt̄ happens thousands of times more often than stop pair production would. So even if the signal exists, it's buried under an enormous pile of background events that look almost identical.

This is what particle physics experiments are fundamentally about — not just detecting particles, but finding rare signals in overwhelming noise.

## The Cheat Sheet We Had

So how do you test whether you can identify low-momentum electrons without being drowned in fakes?

In real collision data, you can't. You don't know which electrons are real and which are misidentified particles — that's exactly what you're trying to figure out.

This is where Monte Carlo simulations come in. A Monte Carlo simulation generates virtual collisions using our best theoretical models of physics. Crucially, because the simulation is built from scratch, you have access to the ground truth — you know exactly which simulated particles are real prompt electrons and which are fakes. It's like having an answer key.

I used two Monte Carlo samples: a simulated T2-4bd signal sample (the compressed stop decay we were hoping to find) and a simulated tt̄ dilepton background sample (the noise we needed to reject). By running both through the detector simulation and comparing what the reconstruction algorithms reported against what was actually generated, I could measure exactly how well any given set of identification criteria performed.

## What I Found

I studied whether the existing electron identification criteria — designed for electrons above 5 GeV — could be adapted to work in the 1–5 GeV range. Some cuts held up fine in the low momentum regime. Others needed adjusting.

The resulting identification efficiency was between 20–70% depending on momentum, with a misidentification rate below 8%. Not perfect — but good enough to be useful.

The more important finding came from the sensitivity study. Using existing muon data as a proxy for electrons (they behave similarly at low momenta), I calculated how well the analysis could distinguish signal from background across different momentum ranges. The pT < 5 GeV range had the highest sensitivity by far — a sensitivity of 10.0 compared to 4.0 in the next bin. The compressed SUSY signal was most visible precisely in the region the analysis had been ignoring.

## The Recommendation

My paper was a recommendation, not a discovery. We weren't claiming to have found SUSY. We were showing that future searches would be more sensitive if they included low-momentum electrons — and that doing so was technically feasible with the adapted identification criteria.

It's a small piece of a much larger puzzle. But in a field where experiments run for decades and evidence accumulates slowly, knowing where to look matters.

Whether these electrons ever reveal a new particle is a question for future analyses. We just made the detector a little less blind to the possibility.
