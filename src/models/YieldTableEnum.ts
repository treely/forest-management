// Naming scheme: <country>_<yieldTableName>_<freeText>;

enum YieldTableEnum {
  // AT Tirol
  AT_TIROL_Buche = 'at_tirol_buche',
  AT_TIROL_LaercheSuedtirol = 'at_tirol_laercheSuedtirol',
  AT_TIROL_KieferSuedtirol = 'at_tirol_kieferSuedtirol',
  AT_TIROL_FichteKalkErtragsniveauMittel = 'at_tirol_fichteKalkErtragsniveauMittel',
  AT_TIROL_FichteKalkErtragsniveauNieder = 'at_tirol_fichteKalkErtragsniveauNieder',
  AT_TIROL_FichteSilikatErtragsniveauHoch = 'at_tirol_fichteSilikatErtragsniveauHoch',
  AT_TIROL_FichteSilikatErtragsniveauMittel = 'at_tirol_fichteSilikatErtragsniveauMittel',
  AT_TIROL_Tanne = 'at_tirol_tanne',
  AT_TIROL_Zirbe = 'at_tirol_zirbe',

  // AT Marschall
  AT_MARSCHALL_FichteBruck = 'at_marschall_fichteBruck',
  AT_MARSCHALL_FichteHochgebirge = 'at_marschall_fichteHochgebirge',
  AT_MARSCHALL_FichteWeitra = 'at_marschall_fichteWeitra',
  AT_MARSCHALL_KieferLitschau = 'at_marschall_kieferLitschau',

  // CH Marschall
  CH_MARSCHALL_LaercheSchweiz = 'ch_marschall_laercheSchweiz',

  // CZ Cerny
  CZ_CERNY_Buche = 'cz_cerny_buche',
  CZ_CERNY_Eiche = 'cz_cerny_eiche',
  CZ_CERNY_Fichte = 'cz_cerny_fichte',
  CZ_CERNY_Kiefer = 'cz_cerny_kiefer',

  // DE Andere
  DE_LOCKOW_BirkeNordOst = 'de_lockow_birkeNordOst',

  // DE Marschall
  DE_MARSCHALL_BucheBraunschweig = 'de_marschall_bucheBraunschweig',
  DE_MARSCHALL_DouglasieBadenWuerttemberg = 'de_marschall_douglasieBadenWuerttemberg',
  DE_MARSCHALL_FichteBayern = 'de_marschall_fichteBayern',
  DE_MARSCHALL_TanneWuerttemberg = 'de_marschall_tanneWuerttemberg',

  // DE Ocell Bayern
  DE_ASSMANN_FichteBayernOcell = 'de_assmann_fichteBayernOcell',
  DE_BAUMER_RoteicheBayernOcell = 'de_baumer_roteicheBayernOcell',
  DE_BERGEL_DouglasieBayernOcell = 'de_bergel_douglasieBayernOcell',
  DE_ECKSTEIN_StrobeBayernOcell = 'de_eckstein_strobeBayernOcell',
  DE_GEHRHARDT_BucheBayernOcell = 'de_gehrhardt_bucheBayernOcell',
  DE_HAUSSER_TanneBayernOcell = 'de_hausser_tanneBayernOcell',
  DE_JUETTNER_EicheBayernOcell = 'de_juettner_eicheBayernOcell',
  DE_MITSCHERLICH_ErleBayernOcell = 'de_mitscherlich_erleBayernOcell',
  DE_RAEZEL_PappelBayernOcell = 'de_raezel_pappelBayernOcell',
  DE_SCHOBER_LaercheBayernOcell = 'de_schober_laercheBayernOcell',
  DE_SCHWAPPACH_BirkeBayernOcell = 'de_schwappach_birkeBayernOcell',
  DE_VOLLQUARDTS_EscheBayernOcell = 'de_volquardts_escheBayernOcell',
  DE_WIEDEMANN_KieferBayernOcell = 'de_wiedemann_kieferBayernOcell',

  // DE Ocell Brandenburg
  DE_BAUMER_RoteicheBrandenburgOcell = 'de_baumer_roteicheBrandenburgOcell',
  DE_BERGEL_DouglasieBrandenburgOcell = 'de_bergel_douglasieBrandenburgOcell',
  DE_DITTMAR_BucheBrandenburgOcell = 'de_dittmar_bucheBrandenburgOcell',
  DE_ECKSTEIN_StrobeBrandenburgOcell = 'de_eckstein_strobeBrandenburgOcell',
  DE_ERTELD_EicheBrandenburgOcell = 'de_erteld_eicheBrandenburgOcell',
  DE_LEMBCKE_KieferBrandenburgOcell = 'de_lembcke_kieferBrandenburgOcell',
  DE_LOCKOW_ErleBrandenburgOcell = 'de_lockow_erleBrandenburgOcell',
  DE_LOCKOW_MoorbirkeBrandenburgOcell = 'de_lockow_moorbirkeBrandenburgOcell',
  DE_RAETZEL_PappelBrandenburgOcell = 'de_raetzel_pappelBrandenburgOcell',
  DE_SCHMIDT_TanneBrandenburgOcell = 'de_schmidt_tanneBrandenburgOcell',
  DE_SCHOBER_LaercheBrandenburgOcell = 'de_schober_laercheBrandenburgOcell',
  DE_VOLLQUARDTS_EscheBrandenburgOcell = 'de_vollquardts_escheBrandenburgOcell',
  DE_WENK_FichteBrandenburgOcell = 'de_wenk_fichteBrandenburgOcell',

  // DE Wiedemann
  DE_WIEDEMANN_BirkeBadenWuerttemberg = 'de_wiedemann_birkeBadenWuerttemberg',
  DE_WIEDEMANN_BucheBadenWuerttemberg = 'de_wiedemann_bucheBadenWuerttemberg',
  DE_WIEDEMANN_EicheBadenWuerttemberg = 'de_wiedemann_eicheBadenWuerttemberg',
  DE_WIEDEMANN_ElärcheBadenWuerttemberg = 'de_wiedemann_elärcheBadenWuerttemberg',
  DE_WIEDEMANN_ErleBadenWuerttemberg = 'de_wiedemann_erleBadenWuerttemberg',
  DE_WIEDEMANN_EscheBadenWuerttemberg = 'de_wiedemann_escheBadenWuerttemberg',
  DE_WIEDEMANN_FichteBadenWuerttemberg = 'de_wiedemann_fichteBadenWuerttemberg',
  DE_WIEDEMANN_JlärcheBadenWuerttemberg = 'de_wiedemann_jlärcheBadenWuerttemberg',
  DE_WIEDEMANN_KieferBadenWuerttemberg = 'de_wiedemann_kieferBadenWuerttemberg',
  DE_WIEDEMANN_PappelBadenWuerttemberg = 'de_wiedemann_pappelBadenWuerttemberg',
  DE_WIEDEMANN_RoteicheBadenWuerttemberg = 'de_wiedemann_roteicheBadenWuerttemberg',

  // HU Marschall
  HU_MARSCHALL_EicheUngarn = 'hu_marschall_eicheUngarn',
}

export default YieldTableEnum;
