<CsoundSynthesizer>
<CsOptions>
-d 
</CsOptions>
<CsInstruments>
sr = 44100
ksmps = 64
nchnls = 2
0dbfs = 1.0

instr 1

ifreq = p4
iamp = p5

asig vco2 iamp, ifreq
aout moogladder asig, 4000, 0.25

outs aout, aout

endin


instr 2

ifreq = p4
iamp = p5

asig = vco2(iamp, ifreq)
aout = moogladder(asig, 4000, 0.25)

outs(aout, aout)

endin


</CsInstruments>
<CsScore>
i1 0.0 0.5 440 0.5
i2 1.0 0.5 440 0.5

</CsScore>
</CsoundSynthesizer>
