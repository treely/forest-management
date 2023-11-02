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
import at_marschall_fichteWeitra from './at_marschall_fichteWeitra';
import at_marschall_kieferLitschau from './at_marschall_kieferLitschau';

import ch_marschall_laercheSchweiz from './ch_marschall_laercheSchweiz';

import cz_cerny_buche from './cz_cerny_buche';
import cz_cerny_eiche from './cz_cerny_eiche';
import cz_cerny_fichte from './cz_cerny_fichte';
import cz_cerny_kiefer from './cz_cerny_kiefer';

import de_assmann_fichteBayernOcell from './de_assmann_fichteBayernOcell';
import de_baumer_roteicheBayernOcell from './de_baumer_roteicheBayernOcell';
import de_baumer_roteicheBrandenburgOcell from './de_baumer_roteicheBrandenburgOcell';
import de_bergel_douglasieBayernOcell from './de_bergel_douglasieBayernOcell';
import de_bergel_douglasieBrandenburgOcell from './de_bergel_douglasieBrandenburgOcell';
import de_dittmar_bucheBrandenburgOcell from './de_dittmar_bucheBrandenburgOcell';
import de_eckstein_strobeBayernOcell from './de_eckstein_strobeBayernOcell';
import de_eckstein_strobeBrandenburgOcell from './de_eckstein_strobeBrandenburgOcell';
import de_erteld_eicheBrandenburgOcell from './de_erteld_eicheBrandenburgOcell';
import de_gehrhardt_bucheBayernOcell from './de_gehrhardt_bucheBayernOcell';
import de_hausser_tanneBayernOcell from './de_hausser_tanneBayernOcell';
import de_juettner_eicheBayernOcell from './de_juettner_eicheBayernOcell';
import de_lembcke_kieferBrandenburgOcell from './de_lembcke_kieferBrandenburgOcell';
import de_lockow_birkeNordOst from './de_lockow_birkeNordOst';
import de_lockow_erleBrandenburgOcell from './de_lockow_erleBrandenburgOcell';
import de_lockow_moorbirkeBrandenburgOcell from './de_lockow_moorbirkeBrandenburgOcell';
import de_marschall_bucheBraunschweig from './de_marschall_bucheBraunschweig';
import de_marschall_douglasieBadenWuerttemberg from './de_marschall_douglasieBadenWuerttemberg';
import de_marschall_fichteBayern from './de_marschall_fichteBayern';
import de_marschall_tanneWuerttemberg from './de_marschall_tanneWuerttemberg';
import de_mitscherlich_erleBayernOcell from './de_mitscherlich_erleBayernOcell';
import de_raezel_pappelBayernOcell from './de_raezel_pappelBayernOcell';
import de_raetzel_pappelBrandenburgOcell from './de_raetzel_pappelBrandenburgOcell';
import de_schmidt_tanneBrandenburgOcell from './de_schmidt_tanneBrandenburgOcell';
import de_schober_laercheBayernOcell from './de_schober_laercheBayernOcell';
import de_schober_laercheBrandenburgOcell from './de_schober_laercheBrandenburgOcell';
import de_schwappach_birkeBayernOcell from './de_schwappach_birkeBayernOcell';
import de_volquardts_escheBayernOcell from './de_volquardts_escheBayernOcell';
import de_vollquardts_escheBrandenburgOcell from './de_vollquardts_escheBrandenburgOcell';
import de_wenk_fichteBrandenburgOcell from './de_wenk_fichteBrandenburgOcell';
import de_wiedemann_birkeBadenWuerttemberg from './de_wiedemann_birkeBadenWuerttemberg';
import de_wiedemann_bucheBadenWuerttemberg from './de_wiedemann_bucheBadenWuerttemberg';
import de_wiedemann_eicheBadenWuerttemberg from './de_wiedemann_eicheBadenWuerttemberg';
import de_wiedemann_elärcheBadenWuerttemberg from './de_wiedemann_elärcheBadenWuerttemberg';
import de_wiedemann_erleBadenWuerttemberg from './de_wiedemann_erleBadenWuerttemberg';
import de_wiedemann_escheBadenWuerttemberg from './de_wiedemann_escheBadenWuerttemberg';
import de_wiedemann_fichteBadenWuerttemberg from './de_wiedemann_fichteBadenWuerttemberg';
import de_wiedemann_jlärcheBadenWuerttemberg from './de_wiedemann_jlärcheBadenWuerttemberg';
import de_wiedemann_kieferBadenWuerttemberg from './de_wiedemann_kieferBadenWuerttemberg';
import de_wiedemann_kieferBayernOcell from './de_wiedemann_kieferBayernOcell';
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
  at_marschall_fichteWeitra,
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

  // DE Ocell Bayern
  de_assmann_fichteBayernOcell,
  de_baumer_roteicheBayernOcell,
  de_bergel_douglasieBayernOcell,
  de_eckstein_strobeBayernOcell,
  de_gehrhardt_bucheBayernOcell,
  de_hausser_tanneBayernOcell,
  de_juettner_eicheBayernOcell,
  de_mitscherlich_erleBayernOcell,
  de_raezel_pappelBayernOcell,
  de_schober_laercheBayernOcell,
  de_schwappach_birkeBayernOcell,
  de_volquardts_escheBayernOcell,
  de_wiedemann_kieferBayernOcell,

  // DE Ocell Brandenburg
  de_baumer_roteicheBrandenburgOcell,
  de_bergel_douglasieBrandenburgOcell,
  de_dittmar_bucheBrandenburgOcell,
  de_eckstein_strobeBrandenburgOcell,
  de_erteld_eicheBrandenburgOcell,
  de_lembcke_kieferBrandenburgOcell,
  de_lockow_erleBrandenburgOcell,
  de_lockow_moorbirkeBrandenburgOcell,
  de_raetzel_pappelBrandenburgOcell,
  de_schmidt_tanneBrandenburgOcell,
  de_schober_laercheBrandenburgOcell,
  de_vollquardts_escheBrandenburgOcell,
  de_wenk_fichteBrandenburgOcell,

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
