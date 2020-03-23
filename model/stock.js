var yahoo = require('yahoo-stocks');

let stockModel = {};

const SET50 = ['ADVANC.BK', 'AOT.BK', 'AWC.BK', 'BANPU.BK', 'BBL.BK', 'BDMS.BK', 'BEM.BK', 'BGRIM.BK',
  'BH.BK', 'BJC.BK', 'BTS.BK', 'CBG.BK', 'CPALL.BK', 'CPF.BK', 'CPN.BK', 'CRC.BK', 'DELTA.BK', 'DTAC.BK',
  'EA.BK', 'EGCO.BK', 'GLOBAL.BK', 'GPSC.BK', 'GULF.BK', 'HMPRO.BK', 'INTUCH.BK', 'IRPC.BK', 'IVL.BK',
  'KBANK.BK', 'KTB.BK', 'KTC.BK', 'LH.BK', 'MINT.BK', 'MTC.BK', 'OSC.BK', 'PTT.BK', 'PTTEP.BK', 'PTTGC.BK',
  'RATCH.BK', 'SAWAD.BK', 'SCB.BK', 'SCC.BK', 'TCAP.BK', 'TISCO.BK', 'TMB.BK', 'TOA.BK', 'TOP.BK',
  'TRUE.BK', 'TU.BK', 'VGI.BK', 'WHA.BK'];

stockModel.getSET50 = _ => SET50;

stockModel.isSET50 = symbol => {
  return SET50.indexOf(symbol) > -1;
};

stockModel.getData = async symbol => {
  return yahoo.history(symbol, { range: '10y' });
};

module.exports = stockModel;