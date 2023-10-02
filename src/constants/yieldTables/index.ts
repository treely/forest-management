import YieldTable from '../../models/YieldTable';
import YieldTableEnum from '../../models/YieldTableEnum';

import at_tirol_fichteKalkErtragsniveauMittel from './at_tirol_fichteKalkErtragsniveauMittel';
import at_tirol_fichteSilikatErtragsniveauHoch from './at_tirol_fichteSilikatErtragsniveauHoch';
import at_tirol_fichteSilikatErtragsniveauMittel from './at_tirol_fichteSilikatErtragsniveauMittel';
import at_tirol_laercheSuedtirol from './at_tirol_laercheSuedtirol';
import at_tirol_buche from './at_tirol_buche';
import at_tirol_kieferSuedtirol from './at_tirol_kieferSuedtirol';
import at_tirol_zirbe from './at_tirol_zirbe';

import at_marschall_fichteBruck from './at_marschall_fichteBruck';
import at_marschall_fichteHochgebirge from './at_marschall_fichteHochgebirge';
import at_marschall_kieferLitschau from './at_marschall_kieferLitschau';

import ch_marschall_laercheSchweiz from './ch_marschall_laercheSchweiz';

import cz_cerny_buche from './cz_cerny_buche';
import cz_cerny_eiche from './cz_cerny_eiche';
import cz_cerny_fichte from './cz_cerny_fichte';
import cz_cerny_kiefer from './cz_cerny_kiefer';

import de_gehrhardt_bucheBayernOcell from './de_gehrhardt_bucheBayernOcell';
import de_lockow_birkeNordOst from './de_lockow_birkeNordOst';
import de_marschall_bucheBraunschweig from './de_marschall_bucheBraunschweig';
import de_marschall_douglasieBadenWuerttemberg from './de_marschall_douglasieBadenWuerttemberg';
import de_marschall_fichteBayern from './de_marschall_fichteBayern';
import de_marschall_tanneWuerttemberg from './de_marschall_tanneWuerttemberg';
import de_wiedemann_birkeBadenWuerttemberg from './de_wiedemann_birkeBadenWuerttemberg';
import de_wiedemann_bucheBadenWuerttemberg from './de_wiedemann_bucheBadenWuerttemberg';
import de_wiedemann_eicheBadenWuerttemberg from './de_wiedemann_eicheBadenWuerttemberg';
import de_wiedemann_elärcheBadenWuerttemberg from './de_wiedemann_elärcheBadenWuerttemberg';
import de_wiedemann_erleBadenWuerttemberg from './de_wiedemann_erleBadenWuerttemberg';
import de_wiedemann_escheBadenWuerttemberg from './de_wiedemann_escheBadenWuerttemberg';
import de_wiedemann_fichteBadenWuerttemberg from './de_wiedemann_fichteBadenWuerttemberg';
import de_wiedemann_jlärcheBadenWuerttemberg from './de_wiedemann_jlärcheBadenWuerttemberg';
import de_wiedemann_kieferBadenWuerttemberg from './de_wiedemann_kieferBadenWuerttemberg';
import de_wiedemann_pappelBadenWuerttemberg from './de_wiedemann_pappelBadenWuerttemberg';
import de_wiedemann_roteicheBadenWuerttemberg from './de_wiedemann_roteicheBadenWuerttemberg';

import hu_marschall_eicheUngarn from './hu_marschall_eicheUngarn';

const yieldTables: Record<YieldTableEnum, YieldTable> = {
  // AT Tirol
  at_tirol_buche,
  at_tirol_fichteKalkErtragsniveauMittel,
  at_tirol_fichteSilikatErtragsniveauHoch,
  at_tirol_fichteSilikatErtragsniveauMittel,
  at_tirol_kieferSuedtirol,
  at_tirol_laercheSuedtirol,
  at_tirol_zirbe,

  // AT Marschall
  at_marschall_fichteBruck,
  at_marschall_fichteHochgebirge,
  at_marschall_kieferLitschau,

  // CH Marschall
  ch_marschall_laercheSchweiz,

  // CZ Cerny
  cz_cerny_buche,
  cz_cerny_eiche,
  cz_cerny_fichte,
  cz_cerny_kiefer,

  // DE Lockow
  de_lockow_birkeNordOst,

  // DE Marschall
  de_marschall_bucheBraunschweig,
  de_marschall_douglasieBadenWuerttemberg,
  de_marschall_fichteBayern,
  de_marschall_tanneWuerttemberg,

  // DE Ocell
  de_gehrhardt_bucheBayernOcell,

  // DE Wiedemann
  de_wiedemann_birkeBadenWuerttemberg,
  de_wiedemann_bucheBadenWuerttemberg,
  de_wiedemann_eicheBadenWuerttemberg,
  de_wiedemann_elärcheBadenWuerttemberg,
  de_wiedemann_erleBadenWuerttemberg,
  de_wiedemann_escheBadenWuerttemberg,
  de_wiedemann_fichteBadenWuerttemberg,
  de_wiedemann_jlärcheBadenWuerttemberg,
  de_wiedemann_kieferBadenWuerttemberg,
  de_wiedemann_pappelBadenWuerttemberg,
  de_wiedemann_roteicheBadenWuerttemberg,

  // HU Marschall
  hu_marschall_eicheUngarn,
};

export default yieldTables;
