import { aapl } from './aapl.mock';
import { abnb } from './abnb';
import { ADBE } from './ADBE';
import { ADSK } from './ADSK';
import { afrm } from './afrm';
import { AMC } from './AMC';
import { amd } from './amd';
import { amzn } from './amzn.mock';
import { API } from './API';
import { asml } from './ASML';
import { ATVI } from './ATVI';
import { AVGO } from './AVGO';
import { AXP } from './AXP';
import { BABA } from './BABA';
import { bidu } from './bidu';
import { bili } from './BILI.mock';
import { blde } from './blde';
import { BYND } from './BYND';
import { CHWY } from './CHWY';
import { CLOV } from './CLOV';
import { coin } from './coin';
import { CRM } from './CRM';
import { CRWD } from './CRWD';
import { DASH } from './DASH';
import { DDOG } from './DDOG';
import { DIS } from './DIS.mock';
import { DKNG } from './DKNG';
import { DOCU } from './DOCU';
import { DUOL } from './DUOL';
import { EA } from './EA';
import { EDIT } from './EDIT';
import { ESTC } from './ESTC';
import { ETSY } from './ETSY';
import { fb } from './fb';
import { fvrr } from './fvrr';
import { GME } from './GME';
import { googl } from './googl.mock';
import { GS } from './GS';
import { HD } from './HD';
import { hood } from './hood';
import { huya } from './huya';
import { IAC } from './IAC';
import { INTU } from './INTU';
import { ISRG } from './ISRG';
import { JD } from './JD';
import { JMIA } from './JMIA';
import { jnj } from './jnj';
import { JPM } from './JPM';
import { lmt } from './lmt';
import { logi } from './LOGI';
import { lrcx } from './lrcx';
import { luv } from './luv';
import { LZ } from './LZ';
import { mdb } from './MDB';
import { meli } from './MELI';
import { mrk } from './mrk';
import { MRNA } from './MRNA';
import { msft } from './msft';
import { NET } from './NET';
import { nflx } from './NFLX';
import { NIO } from './NIO_mock';
import { noc } from './noc';
import { NOW } from './NOW';
import { ntdoy } from './ntdoy';
import { nvax } from './nvax';
import { nvda } from './nvda';
import { ob } from './ob';
import { OKTA } from './OKTA';
import { OPEN } from './OPEN';
import { orcl } from './orcl';
import { pdd } from './PDD.mock';
import { PENN } from './PENN';
import { PINS } from './PINs';
import { pltr } from './pltr';
import { PTON } from './PTON';
import { PYPL } from './PYPL';
import { qs } from './qs';
import { RBLX } from './RBLX.mock';
import { RDFN } from './RDFN';
import { RH } from './RH';
import { roku } from './ROKU';
import { rskd } from './rskd';
import { rtx } from './rtx';
import { sbux } from './sbux';
import { SE } from './SE';
import { shop } from './shop.mock';
import { SKLZ } from './SKLZ';
import { snap } from './snap';
import { SNOW } from './SNOW';
import { SOFI } from './SOFI';
import { SPLK } from './SPLK';
import { SPOT } from './SPOT';
import { SQ } from './SQ.mock';
import { STEM } from './STEM';
import { swks } from './swks';
import { techy } from './TCEHY';
import { TDOC } from './TDOC';
import { team } from './team';
import { tgt } from './tgt';
import { TRMB } from './TRMB';
import { tsla } from './TSLA.mock';
import { TSM } from './TSM';
import { TTD } from './TTD';
import { twlo } from './twlo';
import { TWTR } from './TWTR';
import { U } from './U.mock';
import { UBER } from './UBER';
import { ulta } from './ULTA';
import { unh } from './unh';
import { up } from './UP';
import { upst } from './upst';
import { upwk } from './UPWK';
import { v } from './v';
import { VMEO } from './vmeo';
import { vmw } from './vmw';
import { wish } from './wish';
import { wix } from './wix';
import { xpev } from './XPEV';
import { you } from './you';
import { Z } from './Z.mock';
import { ZM } from './ZM';
import { ZS } from './ZS';

export const ownedStockMap = {
  aapl,
  abnb,
  ADBE,
  ADSK,
  afrm,
  AMC,
  amd,
  amzn,
  asml,
  ATVI,
  AVGO,
  AXP,
  BABA,
  bili,
  BYND,
  CHWY,
  CLOV,
  coin,
  CRM,
  CRWD,
  DASH,
  DDOG,
  DIS,
  DKNG,
  DOCU,
  EA,
  EDIT,
  ESTC,
  ETSY,
  fb,
  GME,
  googl,
  GS,
  HD,
  hood,
  IAC,
  INTU,
  ISRG,
  JD,
  JMIA,
  jnj,
  JPM,
  lmt,
  logi,
  lrcx,
  luv,
  mdb,
  meli,
  mrk,
  MRNA,
  msft,
  NET,
  nflx,
  NIO,
  noc,
  NOW,
  nvda,
  ob,
  OKTA,
  OPEN,
  orcl,
  pdd,
  PENN,
  PINS,
  pltr,
  PTON,
  PYPL,
  RBLX,
  RDFN,
  RH,
  roku,
  rtx,
  sbux,
  SE,
  shop,
  snap,
  SNOW,
  SOFI,
  SPLK,
  SPOT,
  SQ,
  swks,
  TDOC,
  team,
  techy,
  tgt,
  tsla,
  TSM,
  TTD,
  twlo,
  TWTR,
  U,
  UBER,
  unh,
  upwk,
  xpev,
  Z,
  ZM,
  ZS,
  v,
};

export const watchListMap = {
  API,
  bidu,
  blde,
  DUOL,
  huya,
  LZ,
  ntdoy,
  rskd,
  SKLZ,
  STEM,
  TRMB,
  ulta,
  up,
  upst,
  VMEO,
  vmw,
  wish,
  wix,
  you,
  qs,
  nvax,
  fvrr,
};
