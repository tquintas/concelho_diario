const version = "2.0.1";

const codcelhos = ['AGD', 'ALB', 'AND', 'ARC', 'AVR', 'CPV', 'ESP', 'ETR', 'VFR', 'ILH', 'MLD', 'MRS', 'OAZ', 'OBR', 'OVR', 'SJM', 'SVV', 'VGS', 'VLC', 'AJT', 'ADV', 'AVT', 'BRC', 'BJA', 'CVR', 'CBA', 'FAL', 'MTL', 'MRA', 'ODM', 'ORQ', 'SRP', 'VDG', 'AMR', 'BCL', 'BRG', 'CBC', 'CBT', 'EPS', 'FAF', 'GMR', 'PVL', 'TBR', 'VRM', 'VNF', 'VVD', 'VIZ', 'AFE', 'BGC', 'CRZ', 'FEC', 'MCD', 'MDR', 'MDL', 'MGD', 'TMC', 'VFL', 'VMS', 'VNH', 'BMT', 'CTB', 'CVL', 'FND', 'IDN', 'OLR', 'PNC', 'PNV', 'SRT', 'VLR', 'VVR', 'AGN', 'CNT', 'CBR', 'CDN', 'FIG', 'GOI', 'LSA', 'MIR', 'MCV', 'MMV', 'OHP', 'PPS', 'PCV', 'PNL', 'SRE', 'TBU', 'PRS', 'ADL', 'ARL', 'BRB', 'ETZ', 'EVR', 'MMN', 'MOR', 'MOU', 'PRL', 'RDD', 'RMZ', 'VND', 'VNT', 'VVC', 'ABF', 'ACT', 'AJZ', 'CTM', 'FAR', 'LAG', 'LGS', 'LLE', 'MCQ', 'OLH', 'PTM', 'SBA', 'SLV', 'TVR', 'VBP', 'VRS', 'AGB', 'ALD', 'CLB', 'FCR', 'FAG', 'GVA', 'GRD', 'MTG', 'MED', 'PNH', 'SBG', 'SEI', 'TCS', 'VLF', 'ACB', 'AVZ', 'ANS', 'BTL', 'BBR', 'CLD', 'CPR', 'FVN', 'LRA', 'MGR', 'NZR', 'OBD', 'PGR', 'PNI', 'PBL', 'PMS', 'ALQ', 'ARV', 'AZB', 'CDV', 'CSC', 'LSB', 'LRS', 'LNH', 'MFR', 'OER', 'SNT', 'SMA', 'TVD', 'VFX', 'AMD', 'ODV', 'ALT', 'ARR', 'AVS', 'CMR', 'CVD', 'CRT', 'ELV', 'FTR', 'GAV', 'MRV', 'MFT', 'NIS', 'PSR', 'PTG', 'SSL', 'AMT', 'BAO', 'FLG', 'GDM', 'LOU', 'MAI', 'MCN', 'MTS', 'PFR', 'PRD', 'PNF', 'PRT', 'PVZ', 'STS', 'VLG', 'VCD', 'VNG', 'TRF', 'ABT', 'ACN', 'ALR', 'APC', 'BNV', 'CTX', 'CHM', 'CNS', 'CCH', 'ENT', 'FZZ', 'GLG', 'MAC', 'RMR', 'SMG', 'STR', 'SRD', 'TMR', 'TNV', 'VNB', 'ORM', 'ASL', 'ACH', 'ALM', 'BRR', 'GDL', 'MTA', 'MTJ', 'PLM', 'STC', 'SXL', 'SSB', 'STB', 'SNS', 'AVV', 'CMN', 'MLG', 'MNC', 'PCR', 'PTB', 'PTL', 'VLN', 'VCT', 'VNC', 'ALJ', 'BTC', 'CHV', 'MSF', 'MDB', 'MTR', 'MUR', 'PRG', 'RPN', 'SBS', 'SMP', 'VLP', 'VPA', 'VRL', 'AMM', 'CRS', 'CDR', 'CNF', 'LMG', 'MGL', 'MBR', 'MRT', 'NLS', 'OFR', 'PCT', 'PND', 'RSD', 'SCD', 'SJP', 'SPS', 'SAT', 'SRN', 'TBC', 'TRC', 'TND', 'VNP', 'VIS', 'VZL'];
const conchnames = ['agueda', 'albergaria-a-velha', 'anadia', 'arouca', 'aveiro', 'castelo de paiva', 'espinho', 'estarreja', 'santa maria da feira', 'ilhavo', 'mealhada', 'murtosa', 'oliveira de azemeis', 'oliveira do bairro', 'ovar', 'sao joao da madeira', 'sever do vouga', 'vagos', 'vale de cambra', 'aljustrel', 'almodovar', 'alvito', 'barrancos', 'beja', 'castro verde', 'cuba', 'ferreira do alentejo', 'mertola', 'moura', 'odemira', 'ourique', 'serpa', 'vidigueira', 'amares', 'barcelos', 'braga', 'cabeceiras de basto', 'celorico de basto', 'esposende', 'fafe', 'guimaraes', 'povoa de lanhoso', 'terras de bouro', 'vieira do minho', 'vila nova de famalicao', 'vila verde', 'vizela', 'alfandega da fe', 'braganca', 'carrazeda de ansiaes', 'freixo de espada a cinta', 'macedo de cavaleiros', 'miranda do douro', 'mirandela', 'mogadouro', 'torre de moncorvo', 'vila flor', 'vimioso', 'vinhais', 'belmonte', 'castelo branco', 'covilha', 'fundao', 'idanha-a-nova', 'oleiros', 'penamacor', 'proenca-a-nova', 'serta', 'vila de rei', 'vila velha de rodao', 'arganil', 'cantanhede', 'coimbra', 'condeixa-a-nova', 'figueira da foz', 'gois', 'lousa', 'mira', 'miranda do corvo', 'montemor-o-velho', 'oliveira do hospital', 'pampilhosa da serra', 'penacova', 'penela', 'soure', 'tabua', 'vila nova de poiares', 'alandroal', 'arraiolos', 'borba', 'estremoz', 'evora', 'montemor-o-novo', 'mora', 'mourao', 'portel', 'redondo', 'reguengos de monsaraz', 'vendas novas', 'viana do alentejo', 'vila vicosa', 'albufeira', 'alcoutim', 'aljezur', 'castro marim', 'faro', 'lagoa', 'lagos', 'loule', 'monchique', 'olhao', 'portimao', 'sao bras de alportel', 'silves', 'tavira', 'vila do bispo', 'vila real de santo antonio', 'aguiar da beira', 'almeida', 'celorico da beira', 'figueira de castelo rodrigo', 'fornos de algodres', 'gouveia', 'guarda', 'manteigas', 'meda', 'pinhel', 'sabugal', 'seia', 'trancoso', 'vila nova de foz coa', 'alcobaca', 'alvaiazere', 'ansiao', 'batalha', 'bombarral', 'caldas da rainha', 'castanheira de pera', 'figueiro dos vinhos', 'leiria', 'marinha grande', 'nazare', 'obidos', 'pedrogao grande', 'peniche', 'pombal', 'porto de mos', 'alenquer', 'arruda dos vinhos', 'azambuja', 'cadaval', 'cascais', 'lisboa', 'loures', 'lourinha', 'mafra', 'oeiras', 'sintra', 'sobral de monte agraco', 'torres vedras', 'vila franca de xira', 'amadora', 'odivelas', 'alter do chao', 'arronches', 'avis', 'campo maior', 'castelo de vide', 'crato', 'elvas', 'fronteira', 'gaviao', 'marvao', 'monforte', 'nisa', 'ponte de sor', 'portalegre', 'sousel', 'amarante', 'baiao', 'felgueiras', 'gondomar', 'lousada', 'maia', 'marco de canaveses', 'matosinhos', 'pacos de ferreira', 'paredes', 'penafiel', 'porto', 'povoa de varzim', 'santo tirso', 'valongo', 'vila do conde', 'vila nova de gaia', 'trofa', 'abrantes', 'alcanena', 'almeirim', 'alpiarca', 'benavente', 'cartaxo', 'chamusca', 'constancia', 'coruche', 'entroncamento', 'ferreira do zezere', 'golega', 'macao', 'rio maior', 'salvaterra de magos', 'santarem', 'sardoal', 'tomar', 'torres novas', 'vila nova da barquinha', 'ourem', 'alcacer do sal', 'alcochete', 'almada', 'barreiro', 'grandola', 'moita', 'montijo', 'palmela', 'santiago do cacem', 'seixal', 'sesimbra', 'setubal', 'sines', 'arcos de valdevez', 'caminha', 'melgaco', 'moncao', 'paredes de coura', 'ponte da barca', 'ponte de lima', 'valenca', 'viana do castelo', 'vila nova de cerveira', 'alijo', 'boticas', 'chaves', 'mesao frio', 'mondim de basto', 'montalegre', 'murca', 'peso da regua', 'ribeira de pena', 'sabrosa', 'santa marta de penaguiao', 'valpacos', 'vila pouca de aguiar', 'vila real', 'armamar', 'carregal do sal', 'castro daire', 'cinfaes', 'lamego', 'mangualde', 'moimenta da beira', 'mortagua', 'nelas', 'oliveira de frades', 'penalva do castelo', 'penedono', 'resende', 'santa comba dao', 'sao joao da pesqueira', 'sao pedro do sul', 'satao', 'sernancelhe', 'tabuaco', 'tarouca', 'tondela', 'vila nova de paiva', 'viseu', 'vouzela'];
const conchnames_com_acentos = ['Águeda', 'Albergaria-a-Velha', 'Anadia', 'Arouca', 'Aveiro', 'Castelo de Paiva', 'Espinho', 'Estarreja', 'Santa Maria da Feira', 'Ílhavo', 'Mealhada', 'Murtosa', 'Oliveira de Azeméis', 'Oliveira do Bairro', 'Ovar', 'São João da Madeira', 'Sever do Vouga', 'Vagos', 'Vale de Cambra', 'Aljustrel', 'Almodôvar', 'Alvito', 'Barrancos', 'Beja', 'Castro Verde', 'Cuba', 'Ferreira do Alentejo', 'Mértola', 'Moura', 'Odemira', 'Ourique', 'Serpa', 'Vidigueira', 'Amares', 'Barcelos', 'Braga', 'Cabeceiras de Basto', 'Celorico de Basto', 'Esposende', 'Fafe', 'Guimarães', 'Póvoa de Lanhoso', 'Terras de Bouro', 'Vieira do Minho', 'Vila Nova de Famalicão', 'Vila Verde', 'Vizela', 'Alfândega da Fé', 'Bragança', 'Carrazeda de Ansiães', 'Freixo de Espada à Cinta', 'Macedo de Cavaleiros', 'Miranda do Douro', 'Mirandela', 'Mogadouro', 'Torre de Moncorvo', 'Vila Flor', 'Vimioso', 'Vinhais', 'Belmonte', 'Castelo Branco', 'Covilhã', 'Fundão', 'Idanha-a-Nova', 'Oleiros', 'Penamacor', 'Proença-a-Nova', 'Sertã', 'Vila de Rei', 'Vila Velha de Ródão', 'Arganil', 'Cantanhede', 'Coimbra', 'Condeixa-a-Nova', 'Figueira da Foz', 'Góis', 'Lousã', 'Mira', 'Miranda do Corvo', 'Montemor-o-Velho', 'Oliveira do Hospital', 'Pampilhosa da Serra', 'Penacova', 'Penela', 'Soure', 'Tábua', 'Vila Nova de Poiares', 'Alandroal', 'Arraiolos', 'Borba', 'Estremoz', 'Évora', 'Montemor-o-Novo', 'Mora', 'Mourão', 'Portel', 'Redondo', 'Reguengos de Monsaraz', 'Vendas Novas', 'Viana do Alentejo', 'Vila Viçosa', 'Albufeira', 'Alcoutim', 'Aljezur', 'Castro Marim', 'Faro', 'Lagoa', 'Lagos', 'Loulé', 'Monchique', 'Olhão', 'Portimão', 'São Brás de Alportel', 'Silves', 'Tavira', 'Vila do Bispo', 'Vila Real de Santo António', 'Aguiar da Beira', 'Almeida', 'Celorico da Beira', 'Figueira de Castelo Rodrigo', 'Fornos de Algodres', 'Gouveia', 'Guarda', 'Manteigas', 'Mêda', 'Pinhel', 'Sabugal', 'Seia', 'Trancoso', 'Vila Nova de Foz Côa', 'Alcobaça', 'Alvaiázere', 'Ansião', 'Batalha', 'Bombarral', 'Caldas da Rainha', 'Castanheira de Pêra', 'Figueiró dos Vinhos', 'Leiria', 'Marinha Grande', 'Nazaré', 'Óbidos', 'Pedrógão Grande', 'Peniche', 'Pombal', 'Porto de Mós', 'Alenquer', 'Arruda dos Vinhos', 'Azambuja', 'Cadaval', 'Cascais', 'Lisboa', 'Loures', 'Lourinhã', 'Mafra', 'Oeiras', 'Sintra', 'Sobral de Monte Agraço', 'Torres Vedras', 'Vila Franca de Xira', 'Amadora', 'Odivelas', 'Alter do Chão', 'Arronches', 'Avis', 'Campo Maior', 'Castelo de Vide', 'Crato', 'Elvas', 'Fronteira', 'Gavião', 'Marvão', 'Monforte', 'Nisa', 'Ponte de Sor', 'Portalegre', 'Sousel', 'Amarante', 'Baião', 'Felgueiras', 'Gondomar', 'Lousada', 'Maia', 'Marco de Canaveses', 'Matosinhos', 'Paços de Ferreira', 'Paredes', 'Penafiel', 'Porto', 'Póvoa de Varzim', 'Santo Tirso', 'Valongo', 'Vila do Conde', 'Vila Nova de Gaia', 'Trofa', 'Abrantes', 'Alcanena', 'Almeirim', 'Alpiarça', 'Benavente', 'Cartaxo', 'Chamusca', 'Constância', 'Coruche', 'Entroncamento', 'Ferreira do Zêzere', 'Golegã', 'Mação', 'Rio Maior', 'Salvaterra de Magos', 'Santarém', 'Sardoal', 'Tomar', 'Torres Novas', 'Vila Nova da Barquinha', 'Ourém', 'Alcácer do Sal', 'Alcochete', 'Almada', 'Barreiro', 'Grândola', 'Moita', 'Montijo', 'Palmela', 'Santiago do Cacém', 'Seixal', 'Sesimbra', 'Setúbal', 'Sines', 'Arcos de Valdevez', 'Caminha', 'Melgaço', 'Monção', 'Paredes de Coura', 'Ponte da Barca', 'Ponte de Lima', 'Valença', 'Viana do Castelo', 'Vila Nova de Cerveira', 'Alijó', 'Boticas', 'Chaves', 'Mesão Frio', 'Mondim de Basto', 'Montalegre', 'Murça', 'Peso da Régua', 'Ribeira de Pena', 'Sabrosa', 'Santa Marta de Penaguião', 'Valpaços', 'Vila Pouca de Aguiar', 'Vila Real', 'Armamar', 'Carregal do Sal', 'Castro Daire', 'Cinfães', 'Lamego', 'Mangualde', 'Moimenta da Beira', 'Mortágua', 'Nelas', 'Oliveira de Frades', 'Penalva do Castelo', 'Penedono', 'Resende', 'Santa Comba Dão', 'São João da Pesqueira', 'São Pedro do Sul', 'Sátão', 'Sernancelhe', 'Tabuaço', 'Tarouca', 'Tondela', 'Vila Nova de Paiva', 'Viseu', 'Vouzela'];
const concelhos = {
	AGD:{
        name:"Águeda",
        code:"0101",
        lat:40.566667,
        long:-8.45,
        area:335.27,
        population:46349,
        site:"https://www.cm-agueda.pt",
        district:"Aveiro",
        parish:"11",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	ALB:{
        name:"Albergaria-a-Velha",
        code:"0102",
        lat:40.7,
        long:-8.483333,
        area:158.830,
        population:25252,
        site:"http://www.cm-albergaria.pt",
        district:"Aveiro",
        parish:"6",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	AND:{
        name:"Anadia",
        code:"0103",
        lat:40.442222,
        long:-8.436111,
        area:216.649,
        population:29150,
        site:"http://www.cm-anadia.pt/",
        district:"Aveiro",
        parish:"10",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	ARC:{
        name:"Arouca",
        code:"0104",
        lat:40.933333,
        long:-8.25,
        area:329.11,
        population:22359,
        site:"http://www.cm-arouca.pt",
        district:"Aveiro",
        parish:"16",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	AVR:{
        name:"Aveiro",
        code:"0105",
        lat:40.633333,
        long:-8.65,
        area:197.58,
        population:80978,
        site:"http://www.cm-aveiro.pt",
        district:"Aveiro",
        parish:"10",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	CPV:{
        name:"Castelo de Paiva",
        code:"0106",
        lat:41.046389,
        long:-8.269722,
        area:115.01,
        population:16733,
        site:"http://www.cm-castelo-paiva.pt/",
        district:"Aveiro",
        parish:"6",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	ESP:{
        name:"Espinho",
        code:"0107",
        lat:41.008333,
        long:-8.641667,
        area:21.06,
        population:31786,
        site:"http://www.cm-espinho.pt/",
        district:"Aveiro",
        parish:"4",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	ETR:{
        name:"Estarreja",
        code:"0108",
        lat:40.75,
        long:-8.566667,
        area:108.17,
        population:26997,
        site:"http://www.cm-estarreja.pt/",
        district:"Aveiro",
        parish:"5",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	VFR:{
        name:"Santa Maria da Feira",
        code:"0109",
        lat:40.933333,
        long:-8.533333,
        area:213.45,
        population:139313,
        site:"https://www.cm-feira.pt/",
        district:"Aveiro",
        parish:"21",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	ILH:{
        name:"Ílhavo",
        code:"0110",
        lat:40.6,
        long:-8.666667,
        area:73.48,
        population:38598,
        site:"http://www.cm-ilhavo.pt",
        district:"Aveiro",
        parish:"4",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	MLD:{
        name:"Mealhada",
        code:"0111",
        lat:40.383333,
        long:-8.45,
        area:110.66,
        population:20428,
        site:"http://www.cm-mealhada.pt",
        district:"Aveiro",
        parish:"6",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	MRS:{
        name:"Murtosa",
        code:"0112",
        lat:40.7375,
        long:-8.638056,
        area:73.09,
        population:10585,
        site:"http://www.cm-murtosa.pt/",
        district:"Aveiro",
        parish:"4",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	OAZ:{
        name:"Oliveira de Azeméis",
        code:"0113",
        lat:40.833333,
        long:-8.483333,
        area:161.10,
        population:69127,
        site:"http://www.cm-oaz.pt/",
        district:"Aveiro",
        parish:"12",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	OBR:{
        name:"Oliveira do Bairro",
        code:"0114",
        lat:40.516667,
        long:-8.5,
        area:87.32,
        population:23028,
        site:"http://www.cm-olb.pt/",
        district:"Aveiro",
        parish:"4",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	OVR:{
        name:"Ovar",
        code:"0115",
        lat:40.859167,
        long:-8.625,
        area:147.70,
        population:55398,
        site:"http://www.cm-ovar.pt/",
        district:"Aveiro",
        parish:"5",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	SJM:{
        name:"São João da Madeira",
        code:"0116",
        lat:40.9,
        long:-8.5,
        area:7.94,
        population:22162,
        site:"http://www.cm-sjm.pt/",
        district:"Aveiro",
        parish:"1",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	SVV:{
        name:"Sever do Vouga",
        code:"0117",
        lat:40.733333,
        long:-8.369167,
        area:129.88,
        population:12356,
        site:"http://www.cm-sever.pt/",
        district:"Aveiro",
        parish:"7",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	VGS:{
        name:"Vagos",
        code:"0118",
        lat:40.55,
        long:-8.683333,
        area:164.92,
        population:22851,
        site:"http://www.cm-vagos.pt/",
        district:"Aveiro",
        parish:"8",
        nuts3:"Região de Aveiro",
        nuts2:"Centro",
    },
	VLC:{
        name:"Vale de Cambra",
        code:"0119",
        lat:40.85,
        long:-8.4,
        area:235.89,
        population:22864,
        site:"http://www.cm-valedecambra.pt",
        district:"Aveiro",
        parish:"7",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	AJT:{
        name:"Aljustrel",
        code:"0201",
        lat:37.916667,
        long:-8.166667,
        area:458.47,
        population:8874,
        site:"http://www.mun-aljustrel.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	ADV:{
        name:"Almodôvar",
        code:"0202",
        lat:37.516667,
        long:-8.066667,
        area:777.88,
        population:6713,
        site:"http://www.cm-almodovar.pt/",
        district:"Beja",
        parish:"6",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	AVT:{
        name:"Alvito",
        code:"0203",
        lat:38.25,
        long:-7.983333,
        area:264.85,
        population:2282,
        site:"http://www.cm-alvito.pt/",
        district:"Beja",
        parish:"2",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	BRC:{
        name:"Barrancos",
        code:"0204",
        lat:38.130556,
        long:-6.976389,
        area:168.42,
        population:1435,
        site:"http://www.cm-barrancos.pt/",
        district:"Beja",
        parish:"1",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	BJA:{
        name:"Beja",
        code:"0205",
        lat:38.033333,
        long:-7.883333,
        area:1106.44,
        population:33401,
        site:"http://www.cm-beja.pt/",
        district:"Beja",
        parish:"12",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	CVR:{
        name:"Castro Verde",
        code:"0206",
        lat:37.7,
        long:-8.083333,
        area:569.44,
        population:6873,
        site:"http://www.cm-castroverde.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	CBA:{
        name:"Cuba",
        code:"0207",
        lat:38.166667,
        long:-7.9,
        area:172.09,
        population:4374,
        site:"http://www.cm-cuba.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	FAL:{
        name:"Ferreira do Alentejo",
        code:"0208",
        lat:38.05,
        long:-8.116667,
        area:648.25,
        population:7686,
        site:"http://www.cm-ferreira-alentejo.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	MTL:{
        name:"Mértola",
        code:"0209",
        lat:37.633333,
        long:-7.666667,
        area:1292.87,
        population:6205,
        site:"http://www.cm-mertola.pt",
        district:"Beja",
        parish:"7",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	MRA:{
        name:"Moura",
        code:"0210",
        lat:38.116667,
        long:-7.5,
        area:958.46,
        population:13259,
        site:"http://www.cm-moura.pt/",
        district:"Beja",
        parish:"5",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	ODM:{
        name:"Odemira",
        code:"0211",
        lat:37.598,
        long:-8.642,
        area:1720.60,
        population:29523,
        site:"http://www.cm-odemira.pt/",
        district:"Beja",
        parish:"13",
        nuts3:"Alentejo Litoral",
        nuts2:"Alentejo",
    },
	ORQ:{
        name:"Ourique",
        code:"0212",
        lat:37.65,
        long:-8.225,
        area:663.31,
        population:4840,
        site:"http://cm-ourique.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	SRP:{
        name:"Serpa",
        code:"0213",
        lat:37.944722,
        long:-7.598889,
        area:1105.63,
        population:13764,
        site:"http://www.cm-serpa.pt/",
        district:"Beja",
        parish:"5",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	VDG:{
        name:"Vidigueira",
        code:"0214",
        lat:38.210653,
        long:-7.800983,
        area:316.61,
        population:5176,
        site:"http://www.cm-vidigueira.pt/",
        district:"Beja",
        parish:"4",
        nuts3:"Baixo Alentejo",
        nuts2:"Alentejo",
    },
	AMR:{
        name:"Amares",
        code:"0301",
        lat:41.633333,
        long:-8.35,
        area:81.95,
        population:18591,
        site:"http://www.cm-amares.pt/",
        district:"Braga",
        parish:"16",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	BCL:{
        name:"Barcelos",
        code:"0302",
        lat:41.533333,
        long:-8.616667,
        area:378.9,
        population:120391,
        site:"http://www.cm-barcelos.pt/",
        district:"Braga",
        parish:"61",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	BRG:{
        name:"Braga",
        code:"0303",
        lat:41.551111,
        long:-8.428333,
        area:183.4,
        population:193349,
        site:"http://www.cm-braga.pt",
        district:"Braga",
        parish:"37",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	CBC:{
        name:"Cabeceiras de Basto",
        code:"0304",
        lat:41.516667,
        long:-8,
        area:241.82,
        population:16064,
        site:"https://cabeceirasdebasto.pt",
        district:"Braga",
        parish:"12",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	CBT:{
        name:"Celorico de Basto",
        code:"0305",
        lat:41.383333,
        long:-8,
        area:181.07,
        population:20098,
        site:"http://www.cm-celoricobasto.pt/",
        district:"Braga",
        parish:"15",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	EPS:{
        name:"Esposende",
        code:"0306",
        lat:41.533333,
        long:-8.783333,
        area:95.41,
        population:33947,
        site:"http://www.cm-esposende.pt/",
        district:"Braga",
        parish:"9",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	FAF:{
        name:"Fafe",
        code:"0307",
        lat:41.45,
        long:-8.175,
        area:219.08,
        population:48502,
        site:"http://www.cm-fafe.pt/",
        district:"Braga",
        parish:"25",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	GMR:{
        name:"Guimarães",
        code:"0308",
        lat:41.441389,
        long:-8.295278,
        area:240.95,
        population:156852,
        site:"http://www.cm-guimaraes.pt/",
        district:"Braga",
        parish:"48",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	PVL:{
        name:"Póvoa de Lanhoso",
        code:"0309",
        lat:41.578056,
        long:-8.277222,
        area:134.65,
        population:21787,
        site:"http://www.cm-povoadelanhoso.pt/",
        district:"Braga",
        parish:"22",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	TBR:{
        name:"Terras de Bouro",
        code:"0310",
        lat:41.718611,
        long:-8.309444,
        area:277.46,
        population:6359,
        site:"http://www.cm-terrasdebouro.pt/",
        district:"Braga",
        parish:"14",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	VRM:{
        name:"Vieira do Minho",
        code:"0311",
        lat:41.635028,
        long:-8.141778,
        area:218.05,
        population:12997,
        site:"http://www.cm-vminho.pt/",
        district:"Braga",
        parish:"16",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	VNF:{
        name:"Vila Nova de Famalicão",
        code:"0312",
        lat:41.416667,
        long:-8.516667,
        area:201.59,
        population:133590,
        site:"https://www.famalicao.pt/",
        district:"Braga",
        parish:"34",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	VVD:{
        name:"Vila Verde",
        code:"0313",
        lat:41.65,
        long:-8.433333,
        area:228.67,
        population:46474,
        site:"http://www.cm-vilaverde.pt/",
        district:"Braga",
        parish:"33",
        nuts3:"Cávado",
        nuts2:"Norte",
    },
	VIZ:{
        name:"Vizela",
        code:"0314",
        lat:41.383333,
        long:-8.3,
        area:24.70,
        population:23736,
        site:"http://www.cm-vizela.pt/",
        district:"Braga",
        parish:"5",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	AFE:{
        name:"Alfândega da Fé",
        code:"0401",
        lat:41.35,
        long:-6.966667,
        area:321.95,
        population:5104,
        site:"http://www.cm-alfandegadafe.pt/",
        district:"Bragança",
        parish:"12",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	BGC:{
        name:"Bragança",
        code:"0402",
        lat:41.806667,
        long:-6.758889,
        area:1173.57,
        population:34589,
        site:"http://www.cm-braganca.pt/",
        district:"Bragança",
        parish:"49",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	CRZ:{
        name:"Carrazeda de Ansiães",
        code:"0403",
        lat:41.25,
        long:-7.3,
        area:279.24,
        population:5494,
        site:"http://www.cm-carrazedadeansiaes.pt/",
        district:"Bragança",
        parish:"14",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	FEC:{
        name:"Freixo de Espada à Cinta",
        code:"0404",
        lat:41.083333,
        long:-6.8,
        area:244.14,
        population:3215,
        site:"http://www.cm-freixoespadacinta.pt/",
        district:"Bragança",
        parish:"4",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	MCD:{
        name:"Macedo de Cavaleiros",
        code:"0405",
        lat:41.533333,
        long:-6.95,
        area:699.14,
        population:15776,
        site:"http://www.cm-macedodecavaleiros.pt",
        district:"Bragança",
        parish:"30",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	MDR:{
        name:"Miranda do Douro",
        code:"0406",
        lat:41.5,
        long:-6.266667,
        area:487.18,
        population:6466,
        site:"http://www.cm-mdouro.pt",
        district:"Bragança",
        parish:"13",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	MDL:{
        name:"Mirandela",
        code:"0407",
        lat:41.483333,
        long:-7.183333,
        area:658.96,
        population:23850,
        site:"http://www.cm-mirandela.pt/",
        district:"Bragança",
        parish:"30",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	MGD:{
        name:"Mogadouro",
        code:"0408",
        lat:41.333333,
        long:-6.716667,
        area:760.65,
        population:9542,
        site:"http://www.mogadouro.pt/",
        district:"Bragança",
        parish:"21",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	TMC:{
        name:"Torre de Moncorvo",
        code:"0409",
        lat:41.173889,
        long:-7.05,
        area:531.56,
        population:8572,
        site:"http://www.cm-moncorvo.pt/",
        district:"Bragança",
        parish:"13",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	VFL:{
        name:"Vila Flor",
        code:"0410",
        lat:41.307778,
        long:-7.153056,
        area:265.81,
        population:6697,
        site:"http://www.cm-vilaflor.pt",
        district:"Bragança",
        parish:"14",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	VMS:{
        name:"Vimioso",
        code:"0411",
        lat:41.582419,
        long:-6.532917,
        area:481.59,
        population:4669,
        site:"http://www.cm-vimioso.pt/",
        district:"Bragança",
        parish:"10",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	VNH:{
        name:"Vinhais",
        code:"0412",
        lat:41.832639,
        long:-7.008054,
        area:694.76,
        population:9066,
        site:"http://www.cm-vinhais.pt/",
        district:"Bragança",
        parish:"26",
        nuts3:"Terras de Trás-os-Montes",
        nuts2:"Norte",
    },
	BMT:{
        name:"Belmonte",
        code:"0501",
        lat:40.366667,
        long:-7.35,
        area:118.76,
        population:6204,
        site:"http://www.cm-belmonte.pt/",
        district:"Castelo Branco",
        parish:"4",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	CTB:{
        name:"Castelo Branco",
        code:"0502",
        lat:39.816667,
        long:-7.5,
        area:1438.19,
        population:52291,
        site:"http://www.cm-castelobranco.pt/",
        district:"Castelo Branco",
        parish:"19",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	CVL:{
        name:"Covilhã",
        code:"0503",
        lat:40.283333,
        long:-7.5,
        area:555.60,
        population:46457,
        site:"http://www.cm-covilha.pt",
        district:"Castelo Branco",
        parish:"21",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	FND:{
        name:"Fundão",
        code:"0504",
        lat:40.133333,
        long:-7.5,
        area:700.20,
        population:26509,
        site:"http://www.cm-fundao.pt",
        district:"Castelo Branco",
        parish:"23",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	IDN:{
        name:"Idanha-a-Nova",
        code:"0505",
        lat:39.916667,
        long:-7.233333,
        area:1416.34,
        population:8340,
        site:"http://www.cm-idanhanova.pt/",
        district:"Castelo Branco",
        parish:"13",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	OLR:{
        name:"Oleiros",
        code:"0506",
        lat:39.918611,
        long:-7.912778,
        area:464.67,
        population:4900,
        site:"http://www.cm-oleiros.pt/",
        district:"Castelo Branco",
        parish:"10",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	PNC:{
        name:"Penamacor",
        code:"0507",
        lat:40.168333,
        long:-7.167222,
        area:563.71,
        population:4764,
        site:"http://www.cm-penamacor.pt",
        district:"Castelo Branco",
        parish:"9",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	PNV:{
        name:"Proença-a-Nova",
        code:"0508",
        lat:39.750964,
        long:-7.9247,
        area:385.39,
        population:7147,
        site:"http://www.cm-proencanova.pt",
        district:"Castelo Branco",
        parish:"4",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	SRT:{
        name:"Sertã",
        code:"0509",
        lat:39.800833,
        long:-8.100278,
        area:453.13,
        population:14748,
        site:"http://www.cm-serta.pt",
        district:"Castelo Branco",
        parish:"10",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	VLR:{
        name:"Vila de Rei",
        code:"0510",
        lat:39.676944,
        long:-8.1425,
        area:191.55,
        population:3276,
        site:"http://www.cm-viladerei.pt/",
        district:"Castelo Branco",
        parish:"3",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	VVR:{
        name:"Vila Velha de Ródão",
        code:"0511",
        lat:39.651389,
        long:-7.673333,
        area:329.91,
        population:3287,
        site:"http://www.cm-vvrodao.pt/",
        district:"Castelo Branco",
        parish:"4",
        nuts3:"Beira Baixa",
        nuts2:"Centro",
    },
	AGN:{
        name:"Arganil",
        code:"0601",
        lat:40.216667,
        long:-8.05,
        area:332.84,
        population:11596,
        site:"http://www.cm-arganil.pt",
        district:"Coimbra",
        parish:"14",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	CNT:{
        name:"Cantanhede",
        code:"0602",
        lat:40.35,
        long:-8.591667,
        area:390.88,
        population:34218,
        site:"http://www.cm-cantanhede.pt/",
        district:"Coimbra",
        parish:"14",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	CBR:{
        name:"Coimbra",
        code:"0603",
        lat:40.211111,
        long:-8.429167,
        area:319.4,
        population:140796,
        site:"http://www.cm-coimbra.pt/",
        district:"Coimbra",
        parish:"18",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	CDN:{
        name:"Condeixa-a-Nova",
        code:"0604",
        lat:40.116667,
        long:-8.5,
        area:138.68,
        population:17078,
        site:"https://www.cm-condeixa.pt",
        district:"Coimbra",
        parish:"7",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	FIG:{
        name:"Figueira da Foz",
        code:"0605",
        lat:40.15,
        long:-8.85,
        area:379.05,
        population:62125,
        site:"http://www.cm-figfoz.pt/",
        district:"Coimbra",
        parish:"14",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	GOI:{
        name:"Góis",
        code:"0606",
        lat:40.15,
        long:-8.116667,
        area:263.30,
        population:4260,
        site:"http://www.cm-gois.pt",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	LSA:{
        name:"Lousã",
        code:"0607",
        lat:40.116667,
        long:-8.25,
        area:138.40,
        population:17604,
        site:"http://www.cm-lousa.pt/",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	MIR:{
        name:"Mira",
        code:"0608",
        lat:40.433333,
        long:-8.733333,
        area:124.03,
        population:12465,
        site:"http://www.cm-mira.pt",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	MCV:{
        name:"Miranda do Corvo",
        code:"0609",
        lat:40.1,
        long:-8.333333,
        area:126.38,
        population:13098,
        site:"http://www.cm-mirandadocorvo.pt",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	MMV:{
        name:"Montemor-o-Velho",
        code:"0610",
        lat:40.166667,
        long:-8.683333,
        area:228.96,
        population:26171,
        site:"http://www.cm-montemorvelho.pt/",
        district:"Coimbra",
        parish:"11",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	OHP:{
        name:"Oliveira do Hospital",
        code:"0611",
        lat:40.360278,
        long:-7.861667,
        area:234.52,
        population:19421,
        site:"http://www.cm-oliveiradohospital.pt",
        district:"Coimbra",
        parish:"16",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	PPS:{
        name:"Pampilhosa da Serra",
        code:"0612",
        lat:40.05,
        long:-7.95,
        area:396.46,
        population:4083,
        site:"http://www.cm-pampilhosadaserra.pt/",
        district:"Coimbra",
        parish:"8",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	PCV:{
        name:"Penacova",
        code:"0613",
        lat:40.270556,
        long:-8.282778,
        area:216.73,
        population:13119,
        site:"http://www.cm-penacova.pt/",
        district:"Coimbra",
        parish:"8",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	PNL:{
        name:"Penela",
        code:"0614",
        lat:40.033333,
        long:-8.383333,
        area:132.49,
        population:5983,
        site:"http://www.cm-penela.pt",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	SRE:{
        name:"Soure",
        code:"0615",
        lat:40.05,
        long:-8.633333,
        area:263.91,
        population:19245,
        site:"http://www.cm-soure.pt",
        district:"Coimbra",
        parish:"10",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	TBU:{
        name:"Tábua",
        code:"0616",
        lat:40.360345,
        long:-8.029032,
        area:199.79,
        population:12071,
        site:"http://www.cm-tabua.pt/",
        district:"Coimbra",
        parish:"11",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	PRS:{
        name:"Vila Nova de Poiares",
        code:"0617",
        lat:40.210833,
        long:-8.2575,
        area:84.45,
        population:7281,
        site:"http://www.cm-vilanovadepoiares.pt/",
        district:"Coimbra",
        parish:"4",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	ADL:{
        name:"Alandroal",
        code:"0701",
        lat:38.7,
        long:-7.4,
        area:542.68,
        population:5007,
        site:"http://www.cm-alandroal.pt/",
        district:"Évora",
        parish:"4",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	ARL:{
        name:"Arraiolos",
        code:"0702",
        lat:38.716667,
        long:-7.983333,
        area:683.75,
        population:6619,
        site:"http://www.cm-arraiolos.pt/",
        district:"Évora",
        parish:"5",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	BRB:{
        name:"Borba",
        code:"0703",
        lat:38.8,
        long:-7.45,
        area:145.19,
        population:6428,
        site:"http://www.cm-borba.pt/",
        district:"Évora",
        parish:"4",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	ETZ:{
        name:"Estremoz",
        code:"0704",
        lat:38.85,
        long:-7.65,
        area:513.80,
        population:12683,
        site:"http://www.cm-estremoz.pt/",
        district:"Évora",
        parish:"9",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	EVR:{
        name:"Évora",
        code:"0705",
        lat:38.570833,
        long:-7.909444,
        area:1307.08,
        population:53591,
        site:"http://www.cm-evora.pt/",
        district:"Évora",
        parish:"12",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	MMN:{
        name:"Montemor-o-Novo",
        code:"0706",
        lat:38.65,
        long:-8.216667,
        area:1232.97,
        population:15804,
        site:"http://www.cm-montemornovo.pt/",
        district:"Évora",
        parish:"7",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	MOR:{
        name:"Mora",
        code:"0707",
        lat:38.948611,
        long:-8.175278,
        area:443.95,
        population:4135,
        site:"http://www.cm-mora.pt",
        district:"Évora",
        parish:"4",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	MOU:{
        name:"Mourão",
        code:"0708",
        lat:38.384722,
        long:-7.344444,
        area:278.63,
        population:2351,
        site:"http://www.cm-mourao.pt/",
        district:"Évora",
        parish:"3",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	PRL:{
        name:"Portel",
        code:"0709",
        lat:38.308333,
        long:-7.705556,
        area:601.01,
        population:5747,
        site:"http://www.cm-portel.pt/",
        district:"Évora",
        parish:"6",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	RDD:{
        name:"Redondo",
        code:"0710",
        lat:38.646667,
        long:-7.546667,
        area:369.51,
        population:6300,
        site:"http://www.cm-redondo.pt/",
        district:"Évora",
        parish:"2",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	RMZ:{
        name:"Reguengos de Monsaraz",
        code:"0711",
        lat:38.425556,
        long:-7.538611,
        area:464.00,
        population:9871,
        site:"http://www.cm-reguengos-monsaraz.pt/",
        district:"Évora",
        parish:"4",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	VND:{
        name:"Vendas Novas",
        code:"0712",
        lat:38.683333,
        long:-8.45,
        area:222.39,
        population:11260,
        site:"https://www.cm-vendasnovas.pt",
        district:"Évora",
        parish:"2",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	VNT:{
        name:"Viana do Alentejo",
        code:"0713",
        lat:38.333056,
        long:-8.001667,
        area:393.67,
        population:5319,
        site:"http://www.cm-vianadoalentejo.pt",
        district:"Évora",
        parish:"3",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	VVC:{
        name:"Vila Viçosa",
        code:"0714",
        lat:38.77657,
        long:-7.416887,
        area:194.86,
        population:7388,
        site:"http://www.cm-vilavicosa.pt/",
        district:"Évora",
        parish:"4",
        nuts3:"Alentejo Central",
        nuts2:"Alentejo",
    },
	ABF:{
        name:"Albufeira",
        code:"0801",
        lat:37.083333,
        long:-8.25,
        area:140.66,
        population:44158,
        site:"http://www.cm-albufeira.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	ACT:{
        name:"Alcoutim",
        code:"0802",
        lat:37.466667,
        long:-7.466667,
        area:575.36,
        population:2521,
        site:"http://www.cm-alcoutim.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	AJZ:{
        name:"Aljezur",
        code:"0803",
        lat:37.316667,
        long:-8.8,
        area:323.50,
        population:6046,
        site:"http://www.cm-aljezur.pt",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	CTM:{
        name:"Castro Marim",
        code:"0804",
        lat:37.21743,
        long:-7.44347,
        area:300.84,
        population:6434,
        site:"http://www.cm-castromarim.pt",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	FAR:{
        name:"Faro",
        code:"0805",
        lat:37.01728,
        long:-7.93370,
        area:202.57,
        population:67650,
        site:"https://www.cm-faro.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	LAG:{
        name:"Lagoa",
        code:"0806",
        lat:37.75,
        long:-8.45,
        area:45.57,
        population:14416,
        site:"http://www.cm-lagoa.pt",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	LGS:{
        name:"Lagos",
        code:"0807",
        lat:37.1,
        long:-8.666667,
        area:212.99,
        population:33514,
        site:"http://www.cm-lagos.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	LLE:{
        name:"Loulé",
        code:"0808",
        lat:37.15,
        long:-8,
        area:763.67,
        population:72373,
        site:"http://www.cm-loule.pt",
        district:"Faro",
        parish:"9",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	MCQ:{
        name:"Monchique",
        code:"0809",
        lat:37.316667,
        long:-8.633333,
        area:395.30,
        population:5465,
        site:"http://www.cm-monchique.pt/",
        district:"Faro",
        parish:"3",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	OLH:{
        name:"Olhão",
        code:"0810",
        lat:37.05,
        long:-7.8,
        area:130.86,
        population:44639,
        site:"http://www.cm-olhao.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	PTM:{
        name:"Portimão",
        code:"0811",
        lat:37.136944,
        long:-8.538333,
        area:182.06,
        population:59867,
        site:"https://www.cm-portimao.pt",
        district:"Faro",
        parish:"3",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	SBA:{
        name:"São Brás de Alportel",
        code:"0812",
        lat:37.153611,
        long:-7.887778,
        area:153.37,
        population:11266,
        site:"http://www.cm-sbras.pt/",
        district:"Faro",
        parish:"1",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	SLV:{
        name:"Silves",
        code:"0813",
        lat:37.183333,
        long:-8.433333,
        area:680.06,
        population:37813,
        site:"http://www.cm-silves.pt/",
        district:"Faro",
        parish:"6",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	TVR:{
        name:"Tavira",
        code:"0814",
        lat:37.116667,
        long:-7.65,
        area:606.97,
        population:27536,
        site:"http://www.cm-tavira.pt/",
        district:"Faro",
        parish:"6",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	VBP:{
        name:"Vila do Bispo",
        code:"0815",
        lat:37.083333,
        long:-8.883333,
        area:179.06,
        population:5258,
        site:"http://www.cm-viladobispo.pt/",
        district:"Faro",
        parish:"4",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	VRS:{
        name:"Vila Real de Santo António",
        code:"0816",
        lat:37.2,
        long:-7.416667,
        area:61.25,
        population:18828,
        site:"http://www.cm-vrsa.pt",
        district:"Faro",
        parish:"3",
        nuts3:"Algarve",
        nuts2:"Algarve",
    },
	AGB:{
        name:"Aguiar da Beira",
        code:"0901",
        lat:40.816667,
        long:-7.55,
        area:206.77,
        population:5231,
        site:"http://www.cm-aguiardabeira.pt",
        district:"Guarda",
        parish:"10",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	ALD:{
        name:"Almeida",
        code:"0902",
        lat:40.733333,
        long:-6.9,
        area:517.99,
        population:5882,
        site:"http://www.cm-almeida.pt",
        district:"Guarda",
        parish:"16",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	CLB:{
        name:"Celorico da Beira",
        code:"0903",
        lat:40.635833,
        long:-7.393333,
        area:247.22,
        population:7693,
        site:"http://www.cm-celoricodabeira.pt/",
        district:"Guarda",
        parish:"16",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	FCR:{
        name:"Figueira de Castelo Rodrigo",
        code:"0904",
        lat:40.9,
        long:-6.966667,
        area:508.58,
        population:6260,
        site:"http://www.cm-fcr.pt/",
        district:"Guarda",
        parish:"10",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	FAG:{
        name:"Fornos de Algodres",
        code:"0905",
        lat:40.620833,
        long:-7.536111,
        area:131.45,
        population:4989,
        site:"http://www.cm-fornosdealgodres.pt/",
        district:"Guarda",
        parish:"12",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	GVA:{
        name:"Gouveia",
        code:"0906",
        lat:40.5,
        long:-7.6,
        area:300.61,
        population:14046,
        site:"http://www.cm-gouveia.pt/",
        district:"Guarda",
        parish:"16",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	GRD:{
        name:"Guarda",
        code:"0907",
        lat:40.533333,
        long:-7.333333,
        area:712.1,
        population:40126,
        site:"http://www.mun-guarda.pt/",
        district:"Guarda",
        parish:"43",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	MTG:{
        name:"Manteigas",
        code:"0908",
        lat:40.4025,
        long:-7.540278,
        area:121.98,
        population:3430,
        site:"http://cm-manteigas.pt",
        district:"Guarda",
        parish:"4",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	MED:{
        name:"Mêda",
        code:"0909",
        lat:40.966667,
        long:-7.266667,
        area:286.05,
        population:5202,
        site:"http://www.cm-meda.pt",
        district:"Guarda",
        parish:"11",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	PNH:{
        name:"Pinhel",
        code:"0910",
        lat:40.783333,
        long:-7.066667,
        area:484.52,
        population:9627,
        site:"http://www.cm-pinhel.pt/",
        district:"Guarda",
        parish:"18",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	SBG:{
        name:"Sabugal",
        code:"0911",
        lat:40.35,
        long:-7.083333,
        area:822.70,
        population:12544,
        site:"http://www.cm-sabugal.pt/",
        district:"Guarda",
        parish:"30",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	SEI:{
        name:"Seia",
        code:"0912",
        lat:40.416667,
        long:-7.7,
        area:435.69,
        population:24702,
        site:"http://www.cm-seia.pt",
        district:"Guarda",
        parish:"21",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	TCS:{
        name:"Trancoso",
        code:"0913",
        lat:40.783333,
        long:-7.35,
        area:361.52,
        population:9878,
        site:"http://www.cm-trancoso.pt",
        district:"Guarda",
        parish:"21",
        nuts3:"Beiras e Serra da Estrela",
        nuts2:"Centro",
    },
	VLF:{
        name:"Vila Nova de Foz Côa",
        code:"0914",
        lat:41.083333,
        long:-7.133333,
        area:398.15,
        population:6304,
        site:"http://www.cm-fozcoa.pt",
        district:"Guarda",
        parish:"14",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	ACB:{
        name:"Alcobaça",
        code:"1001",
        lat:39.55,
        long:-8.983333,
        area:408.14,
        population:54981,
        site:"http://www.cm-alcobaca.pt",
        district:"Leiria",
        parish:"13",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	AVZ:{
        name:"Alvaiázere",
        code:"1002",
        lat:39.833333,
        long:-8.383333,
        area:160.48,
        population:7287,
        site:"http://www.cm-alvaiazere.pt/",
        district:"Leiria",
        parish:"5",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	ANS:{
        name:"Ansião",
        code:"1003",
        lat:39.916667,
        long:-8.433333,
        area:176.09,
        population:13128,
        site:"http://www.cm-ansiao.pt/",
        district:"Leiria",
        parish:"6",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	BTL:{
        name:"Batalha",
        code:"1004",
        lat:39.66,
        long:-8.826111,
        area:103.42,
        population:15805,
        site:"http://www.cm-batalha.pt",
        district:"Leiria",
        parish:"4",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	BBR:{
        name:"Bombarral",
        code:"1005",
        lat:39.266667,
        long:-9.15,
        area:91.29,
        population:13193,
        site:"http://www.cm-bombarral.pt",
        district:"Leiria",
        parish:"4",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	CLD:{
        name:"Caldas da Rainha",
        code:"1006",
        lat:39.4,
        long:-9.133333,
        area:255.69,
        population:50898,
        site:"http://www.mcr.pt/",
        district:"Leiria",
        parish:"12",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	CPR:{
        name:"Castanheira de Pêra",
        code:"1007",
        lat:40,
        long:-8.216667,
        area:66.78,
        population:2667,
        site:"http://www.cm-castanheiradepera.pt/",
        district:"Leiria",
        parish:"1",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	FVN:{
        name:"Figueiró dos Vinhos",
        code:"1008",
        lat:39.901944,
        long:-8.275,
        area:173.44,
        population:5296,
        site:"http://www.cm-figueirodosvinhos.pt/",
        district:"Leiria",
        parish:"4",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	LRA:{
        name:"Leiria",
        code:"1009",
        lat:39.75,
        long:-8.8,
        area:565.09,
        population:128616,
        site:"http://www.cm-leiria.pt",
        district:"Leiria",
        parish:"18",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	MGR:{
        name:"Marinha Grande",
        code:"1010",
        lat:39.75,
        long:-8.933333,
        area:187.25,
        population:39032,
        site:"http://www.cm-mgrande.pt/",
        district:"Leiria",
        parish:"3",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	NZR:{
        name:"Nazaré",
        code:"1011",
        lat:39.600795,
        long:-9.072475,
        area:82.43,
        population:14889,
        site:"http://www.cm-nazare.pt/",
        district:"Leiria",
        parish:"3",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	OBD:{
        name:"Óbidos",
        code:"1012",
        lat:39.360556,
        long:-9.156944,
        area:141.55,
        population:11772,
        site:"http://www.cm-obidos.pt/",
        district:"Leiria",
        parish:"7",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	PGR:{
        name:"Pedrógão Grande",
        code:"1013",
        lat:39.916944,
        long:-8.146389,
        area:128.75,
        population:3392,
        site:"http://www.cm-pedrogaogrande.pt/",
        district:"Leiria",
        parish:"3",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	PNI:{
        name:"Peniche",
        code:"1014",
        lat:39.358889,
        long:-9.377778,
        area:77.55,
        population:27753,
        site:"http://www.cm-peniche.pt/",
        district:"Leiria",
        parish:"4",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	PBL:{
        name:"Pombal",
        code:"1015",
        lat:39.916667,
        long:-8.666667,
        area:626.00,
        population:51178,
        site:"https://www.cm-pombal.pt/",
        district:"Leiria",
        parish:"13",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	PMS:{
        name:"Porto de Mós",
        code:"1016",
        lat:39.601667,
        long:-8.8175,
        area:261.83,
        population:23203,
        site:"http://www.municipio-portodemos.pt/",
        district:"Leiria",
        parish:"10",
        nuts3:"Região de Leiria",
        nuts2:"Centro",
    },
	ALQ:{
        name:"Alenquer",
        code:"1101",
        lat:39.056111,
        long:-9.008056,
        area:304.22,
        population:43267,
        site:"http://www.cm-alenquer.pt",
        district:"Lisboa",
        parish:"11",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	ARV:{
        name:"Arruda dos Vinhos",
        code:"1102",
        lat:38.983333,
        long:-9.083333,
        area:77.96,
        population:13391,
        site:"http://www.cm-arruda.pt",
        district:"Lisboa",
        parish:"4",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	AZB:{
        name:"Azambuja",
        code:"1103",
        lat:39.066667,
        long:-8.866667,
        area:262.66,
        population:21442,
        site:"http://www.cm-azambuja.pt/",
        district:"Lisboa",
        parish:"7",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	CDV:{
        name:"Cadaval",
        code:"1104",
        lat:39.25,
        long:-9.1,
        area:174.89,
        population:14228,
        site:"http://www.cm-cadaval.pt",
        district:"Lisboa",
        parish:"7",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	CSC:{
        name:"Cascais",
        code:"1105",
        lat:38.7,
        long:-9.416667,
        area:97.40,
        population:214134,
        site:"https://www.cascais.pt/",
        district:"Lisboa",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	LSB:{
        name:"Lisboa",
        code:"1106",
        lat:38.725278,
        long:-9.15,
        area:100.05,
        population:544851,
        site:"http://www.cm-lisboa.pt",
        district:"Lisboa",
        parish:"24",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	LRS:{
        name:"Loures",
        code:"1107",
        lat:38.833333,
        long:-9.166667,
        area:167.24,
        population:201646,
        site:"https://www.cm-loures.pt",
        district:"Lisboa",
        parish:"10",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	LNH:{
        name:"Lourinhã",
        code:"1108",
        lat:39.25,
        long:-9.316667,
        area:147.17,
        population:25735,
        site:"http://www.cm-lourinha.pt",
        district:"Lisboa",
        parish:"8",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	MFR:{
        name:"Mafra",
        code:"1109",
        lat:38.933333,
        long:-9.333333,
        area:291.66,
        population:86523,
        site:"http://www.cm-mafra.pt/",
        district:"Lisboa",
        parish:"11",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	OER:{
        name:"Oeiras",
        code:"1110",
        lat:38.695833,
        long:-9.309167,
        area:45.88,
        population:171802,
        site:"http://www.cm-oeiras.pt",
        district:"Lisboa",
        parish:"5",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	SNT:{
        name:"Sintra",
        code:"1111",
        lat:38.799167,
        long:-9.388333,
        area:319.23,
        population:385954,
        site:"http://www.cm-sintra.pt/",
        district:"Lisboa",
        parish:"11",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	SMA:{
        name:"Sobral de Monte Agraço",
        code:"1112",
        lat:39.019722,
        long:-9.148889,
        area:52.10,
        population:10156,
        site:"http://www.cm-sobral.pt",
        district:"Lisboa",
        parish:"3",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	TVD:{
        name:"Torres Vedras",
        code:"1113",
        lat:39.090556,
        long:-9.259167,
        area:407.15,
        population:83130,
        site:"http://www.cm-tvedras.pt/",
        district:"Lisboa",
        parish:"13",
        nuts3:"Oeste",
        nuts2:"Centro",
    },
	VFX:{
        name:"Vila Franca de Xira",
        code:"1114",
        lat:38.95,
        long:-8.983333,
        area:318.19,
        population:136886,
        site:"http://www.cm-vfxira.pt",
        district:"Lisboa",
        parish:"6",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	AMD:{
        name:"Amadora",
        code:"1115",
        lat:38.75,
        long:-9.233333,
        area:23.79,
        population:171719,
        site:"http://www.cm-amadora.pt",
        district:"Lisboa",
        parish:"6",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	ODV:{
        name:"Odivelas",
        code:"1116",
        lat:38.8,
        long:-9.183333,
        area:26.54,
        population:148156,
        site:"http://www.cm-odivelas.pt/",
        district:"Lisboa",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	ALT:{
        name:"Alter do Chão",
        code:"1201",
        lat:39.2,
        long:-7.666667,
        area:362.07,
        population:3044,
        site:"http://www.cm-alter-chao.pt/",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	ARR:{
        name:"Arronches",
        code:"1202",
        lat:39.116667,
        long:-7.283333,
        area:314.65,
        population:2789,
        site:"https://cm-arronches.pt/",
        district:"Portalegre",
        parish:"3",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	AVS:{
        name:"Avis",
        code:"1203",
        lat:39.05,
        long:-7.883333,
        area:605.97,
        population:3812,
        site:"https://cm-avis.pt/",
        district:"Portalegre",
        parish:"6",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	CMR:{
        name:"Campo Maior",
        code:"1204",
        lat:39.016667,
        long:-7.066667,
        area:247.20,
        population:8042,
        site:"http://www.cm-campo-maior.pt/",
        district:"Portalegre",
        parish:"3",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	CVD:{
        name:"Castelo de Vide",
        code:"1205",
        lat:39.416667,
        long:-7.45,
        area:264.91,
        population:3116,
        site:"https://cm-castelo-vide.pt/",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	CRT:{
        name:"Crato",
        code:"1206",
        lat:39.283333,
        long:-7.65,
        area:398.07,
        population:3225,
        site:"http://www.cm-crato.pt",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	ELV:{
        name:"Elvas",
        code:"1207",
        lat:38.866667,
        long:-7.166667,
        area:631.29,
        population:20753,
        site:"http://www.cm-elvas.pt",
        district:"Portalegre",
        parish:"7",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	FTR:{
        name:"Fronteira",
        code:"1208",
        lat:39.05,
        long:-7.65,
        area:248.60,
        population:2858,
        site:"http://www.cm-fronteira.pt",
        district:"Portalegre",
        parish:"3",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	GAV:{
        name:"Gavião",
        code:"1209",
        lat:39.466667,
        long:-7.933333,
        area:294.59,
        population:3394,
        site:"http://www.cm-gaviao.pt/",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	MRV:{
        name:"Marvão",
        code:"1210",
        lat:39.4,
        long:-7.366667,
        area:154.90,
        population:3021,
        site:"https://www.cm-marvao.pt/",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	MFT:{
        name:"Monforte",
        code:"1211",
        lat:39.052222,
        long:-7.438056,
        area:420.25,
        population:2992,
        site:"http://www.cm-monforte.pt/",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	NIS:{
        name:"Nisa",
        code:"1212",
        lat:39.51540,
        long:-7.64907,
        area:575.68,
        population:5951,
        site:"http://www.cm-nisa.pt",
        district:"Portalegre",
        parish:"7",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	PSR:{
        name:"Ponte de Sor",
        code:"1213",
        lat:39.24910,
        long:-8.00877,
        area:839.71,
        population:15249,
        site:"http://www.cm-pontedesor.pt/",
        district:"Portalegre",
        parish:"5",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	PTG:{
        name:"Portalegre",
        code:"1214",
        lat:39.283333,
        long:-7.433333,
        area:447.14,
        population:22368,
        site:"http://www.cm-portalegre.pt",
        district:"Portalegre",
        parish:"7",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	SSL:{
        name:"Sousel",
        code:"1215",
        lat:38.9525,
        long:-7.676389,
        area:279.32,
        population:4360,
        site:"http://www.cm-sousel.pt",
        district:"Portalegre",
        parish:"4",
        nuts3:"Alto Alentejo",
        nuts2:"Alentejo",
    },
	AMT:{
        name:"Amarante",
        code:"1301",
        lat:41.269444,
        long:-8.078333,
        area:301.33,
        population:56264,
        site:"http://www.cm-amarante.pt/",
        district:"Porto",
        parish:"26",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	BAO:{
        name:"Baião",
        code:"1302",
        lat:41.166667,
        long:-8.033333,
        area:174.53,
        population:20522,
        site:"http://www.cm-baiao.pt/",
        district:"Porto",
        parish:"14",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	FLG:{
        name:"Felgueiras",
        code:"1303",
        lat:41.366667,
        long:-8.183333,
        area:115.74,
        population:58065,
        site:"http://www.cm-felgueiras.pt/",
        district:"Porto",
        parish:"20",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	GDM:{
        name:"Gondomar",
        code:"1304",
        lat:41.15,
        long:-8.533333,
        area:131.86,
        population:168027,
        site:"http://www.cm-gondomar.pt/",
        district:"Porto",
        parish:"7",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	LOU:{
        name:"Lousada",
        code:"1305",
        lat:41.283333,
        long:-8.283333,
        area:96.08,
        population:47387,
        site:"http://www.cm-lousada.pt/",
        district:"Porto",
        parish:"15",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	MAI:{
        name:"Maia",
        code:"1306",
        lat:41.233333,
        long:-8.616667,
        area:82.99,
        population:135678,
        site:"http://www.cm-maia.pt",
        district:"Porto",
        parish:"10",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	MCN:{
        name:"Marco de Canaveses",
        code:"1307",
        lat:41.183333,
        long:-8.15,
        area:201.89,
        population:53450,
        site:"http://www.cm-marco-canaveses.pt/",
        district:"Porto",
        parish:"16",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	MTS:{
        name:"Matosinhos",
        code:"1308",
        lat:41.183333,
        long:-8.7,
        area:62.42,
        population:175478,
        site:"http://www.cm-matosinhos.pt/",
        district:"Porto",
        parish:"4",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	PFR:{
        name:"Paços de Ferreira",
        code:"1309",
        lat:41.283333,
        long:-8.383333,
        area:70.99,
        population:56340,
        site:"http://www.cm-pacosdeferreira.pt",
        district:"Porto",
        parish:"12",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	PRD:{
        name:"Paredes",
        code:"1310",
        lat:41.2,
        long:-8.333333,
        area:156.76,
        population:86854,
        site:"http://www.cm-paredes.pt/",
        district:"Porto",
        parish:"18",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	PNF:{
        name:"Penafiel",
        code:"1311",
        lat:41.20669,
        long:-8.28386,
        area:212.24,
        population:72265,
        site:"http://www.cm-penafiel.pt/",
        district:"Porto",
        parish:"28",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	PRT:{
        name:"Porto",
        code:"1312",
        lat:41.149444,
        long:-8.610833,
        area:41.42,
        population:231962,
        site:"http://www.cm-porto.pt",
        district:"Porto",
        parish:"7",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	PVZ:{
        name:"Póvoa de Varzim",
        code:"1313",
        lat:41.38,
        long:-8.760833,
        area:82.21,
        population:63408,
        site:"http://www.cm-pvarzim.pt",
        district:"Porto",
        parish:"7",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	STS:{
        name:"Santo Tirso",
        code:"1314",
        lat:41.35,
        long:-8.483333,
        area:136.60,
        population:71530,
        site:"http://www.cm-stirso.pt/",
        district:"Porto",
        parish:"14",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	VLG:{
        name:"Valongo",
        code:"1315",
        lat:41.183333,
        long:-8.5,
        area:75.12,
        population:93858,
        site:"http://www.cm-valongo.pt/",
        district:"Porto",
        parish:"4",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	VCD:{
        name:"Vila do Conde",
        code:"1316",
        lat:41.35,
        long:-8.75,
        area:149.03,
        population:79533,
        site:"http://www.cm-viladoconde.pt",
        district:"Porto",
        parish:"21",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	VNG:{
        name:"Vila Nova de Gaia",
        code:"1317",
        lat:41.133333,
        long:-8.616667,
        area:168.46,
        population:304149,
        site:"http://www.cm-gaia.pt",
        district:"Porto",
        parish:"15",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	TRF:{
        name:"Trofa",
        code:"1318",
        lat:41.35,
        long:-8.55,
        area:72.02,
        population:38999,
        site:"http://www.mun-trofa.pt/",
        district:"Porto",
        parish:"5",
        nuts3:"Área Metropolitana do Porto",
        nuts2:"Norte",
    },
	ABT:{
        name:"Abrantes",
        code:"1401",
        lat:39.466667,
        long:-8.2,
        area:714.69,
        population:34351,
        site:"http://www.cm-abrantes.pt",
        district:"Santarém",
        parish:"13",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	ACN:{
        name:"Alcanena",
        code:"1402",
        lat:39.466667,
        long:-8.666667,
        area:137.33,
        population:20604,
        site:"http://www.cm-alcanena.pt",
        district:"Santarém",
        parish:"7",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	ALR:{
        name:"Almeirim",
        code:"1403",
        lat:39.209167,
        long:-8.628611,
        area:222.12,
        population:22016,
        site:"https://www.cm-almeirim.pt/",
        district:"Santarém",
        parish:"4",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	APC:{
        name:"Alpiarça",
        code:"1404",
        lat:39.266667,
        long:-8.583333,
        area:95.36,
        population:6976,
        site:"https://cm-alpiarca.pt/",
        district:"Santarém",
        parish:"1",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	BNV:{
        name:"Benavente",
        code:"1405",
        lat:38.983333,
        long:-8.816667,
        area:521.38,
        population:29716,
        site:"http://www.cm-benavente.pt/",
        district:"Santarém",
        parish:"4",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	CTX:{
        name:"Cartaxo",
        code:"1406",
        lat:39.15,
        long:-8.783333,
        area:158.17,
        population:23187,
        site:"http://www.cm-cartaxo.pt",
        district:"Santarém",
        parish:"6",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	CHM:{
        name:"Chamusca",
        code:"1407",
        lat:39.35,
        long:-8.483333,
        area:746.01,
        population:8530,
        site:"http://www.cm-chamusca.pt/",
        district:"Santarém",
        parish:"5",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	CNS:{
        name:"Constância",
        code:"1408",
        lat:39.483333,
        long:-8.333333,
        area:80.37,
        population:4056,
        site:"http://www.cm-constancia.pt/",
        district:"Santarém",
        parish:"3",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	CCH:{
        name:"Coruche",
        code:"1409",
        lat:38.95,
        long:-8.533333,
        area:1115.72,
        population:17356,
        site:"https://www.cm-coruche.pt/",
        district:"Santarém",
        parish:"6",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	ENT:{
        name:"Entroncamento",
        code:"1410",
        lat:39.466667,
        long:-8.466667,
        area:13.73,
        population:20206,
        site:"https://www.cm-entroncamento.pt/",
        district:"Santarém",
        parish:"2",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	FZZ:{
        name:"Ferreira do Zêzere",
        code:"1411",
        lat:39.7,
        long:-8.283333,
        area:190.38,
        population:8619,
        site:"http://www.cm-ferreiradozezere.pt/",
        district:"Santarém",
        parish:"7",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	GLG:{
        name:"Golegã",
        code:"1412",
        lat:39.4,
        long:-8.483333,
        area:84.32,
        population:5400,
        site:"https://www.cm-golega.pt/",
        district:"Santarém",
        parish:"3",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	MAC:{
        name:"Mação",
        code:"1413",
        lat:39.55,
        long:-8,
        area:399.98,
        population:7338,
        site:"http://www.cm-macao.pt/",
        district:"Santarém",
        parish:"6",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	RMR:{
        name:"Rio Maior",
        code:"1414",
        lat:39.333333,
        long:-8.933333,
        area:272.76,
        population:21005,
        site:"https://www.cm-riomaior.pt",
        district:"Santarém",
        parish:"10",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	SMG:{
        name:"Salvaterra de Magos",
        code:"1415",
        lat:39.025833,
        long:-8.792778,
        area:243.93,
        population:22613,
        site:"http://www.cm-salvaterrademagos.pt",
        district:"Santarém",
        parish:"4",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	STR:{
        name:"Santarém",
        code:"1416",
        lat:39.233889,
        long:-8.686111,
        area:552.54,
        population:58671,
        site:"http://www.cm-santarem.pt",
        district:"Santarém",
        parish:"18",
        nuts3:"Lezíria do Tejo",
        nuts2:"Alentejo",
    },
	SRD:{
        name:"Sardoal",
        code:"1417",
        lat:39.537369,
        long:-8.161381,
        area:92.15,
        population:3939,
        site:"http://www.cm-sardoal.pt",
        district:"Santarém",
        parish:"4",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	TMR:{
        name:"Tomar",
        code:"1418",
        lat:39.6,
        long:-8.416667,
        area:351.2,
        population:36444,
        site:"http://www.cm-tomar.pt",
        district:"Santarém",
        parish:"11",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	TNV:{
        name:"Torres Novas",
        code:"1419",
        lat:39.483333,
        long:-8.533333,
        area:270,
        population:34149,
        site:"http://www.cm-torresnovas.pt",
        district:"Santarém",
        parish:"10",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	VNB:{
        name:"Vila Nova da Barquinha",
        code:"1420",
        lat:39.45,
        long:-8.433333,
        area:49.53,
        population:7322,
        site:"http://www.cm-vnbarquinha.pt/",
        district:"Santarém",
        parish:"4",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	ORM:{
        name:"Ourém",
        code:"1421",
        lat:39.65,
        long:-8.583333,
        area:416.68,
        population:44576,
        site:"http://www.ourem.pt/",
        district:"Santarém",
        parish:"13",
        nuts3:"Médio Tejo",
        nuts2:"Centro",
    },
	ASL:{
        name:"Alcácer do Sal",
        code:"1501",
        lat:38.366667,
        long:-8.5,
        area:1499.87,
        population:11113,
        site:"http://www.cm-alcacerdosal.pt/",
        district:"Setúbal",
        parish:"4",
        nuts3:"Alentejo Litoral",
        nuts2:"Alentejo",
    },
	ACH:{
        name:"Alcochete",
        code:"1502",
        lat:38.75,
        long:-8.966667,
        area:128.36,
        population:19145,
        site:"https://www.cm-alcochete.pt/",
        district:"Setúbal",
        parish:"3",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	ALM:{
        name:"Almada",
        code:"1503",
        lat:38.680278,
        long:-9.158333,
        area:70.21,
        population:177268,
        site:"https://www.cm-almada.pt/",
        district:"Setúbal",
        parish:"11",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	BRR:{
        name:"Barreiro",
        code:"1504",
        lat:38.666667,
        long:-9.066667,
        area:36.39,
        population:78359,
        site:"http://www.cm-barreiro.pt/",
        district:"Setúbal",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	GDL:{
        name:"Grândola",
        code:"1505",
        lat:38.183333,
        long:-8.566667,
        area:825.94,
        population:13823,
        site:"http://www.cm-grandola.pt",
        district:"Setúbal",
        parish:"4",
        nuts3:"Alentejo Litoral",
        nuts2:"Alentejo",
    },
	MTA:{
        name:"Moita",
        code:"1506",
        lat:38.65,
        long:-9,
        area:55.26,
        population:66262,
        site:"http://www.cm-moita.pt",
        district:"Setúbal",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	MTJ:{
        name:"Montijo",
        code:"1507",
        lat:38.7,
        long:-8.966667,
        area:348.62,
        population:55689,
        site:"http://www.mun-montijo.pt",
        district:"Setúbal",
        parish:"5",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	PLM:{
        name:"Palmela",
        code:"1508",
        lat:38.5675,
        long:-8.899167,
        area:465.12,
        population:68856,
        site:"http://www.cm-palmela.pt/",
        district:"Setúbal",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	STC:{
        name:"Santiago do Cacém",
        code:"1509",
        lat:38.016667,
        long:-8.7,
        area:1059.77,
        population:27773,
        site:"http://www.cm-santiagocacem.pt/",
        district:"Setúbal",
        parish:"8",
        nuts3:"Alentejo Litoral",
        nuts2:"Alentejo",
    },
	SXL:{
        name:"Seixal",
        code:"1510",
        lat:38.65,
        long:-9.1,
        area:95.50,
        population:166525,
        site:"http://www.cm-seixal.pt/",
        district:"Setúbal",
        parish:"4",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	SSB:{
        name:"Sesimbra",
        code:"1511",
        lat:38.447222,
        long:-9.099444,
        area:195.47,
        population:52465,
        site:"http://www.cm-sesimbra.pt/",
        district:"Setúbal",
        parish:"3",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	STB:{
        name:"Setúbal",
        code:"1512",
        lat:38.524306,
        long:-8.8925,
        area:230.33,
        population:123519,
        site:"http://www.mun-setubal.pt/",
        district:"Setúbal",
        parish:"5",
        nuts3:"Área Metropolitana de Lisboa",
        nuts2:"Área Metropolitana de Lisboa",
    },
	SNS:{
        name:"Sines",
        code:"1513",
        lat:37.956944,
        long:-8.869722,
        area:132.42,
        population:14214,
        site:"http://www.sines.pt",
        district:"Setúbal",
        parish:"2",
        nuts3:"Alentejo Litoral",
        nuts2:"Alentejo",
    },
	AVV:{
        name:"Arcos de Valdevez",
        code:"1601",
        lat:41.85,
        long:-8.416667,
        area:447.60,
        population:22847,
        site:"http://www.cmav.pt",
        district:"Viana do Castelo",
        parish:"36",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	CMN:{
        name:"Caminha",
        code:"1602",
        lat:41.833333,
        long:-8.833333,
        area:136.52,
        population:16684,
        site:"https://www.cm-caminha.pt/",
        district:"Viana do Castelo",
        parish:"14",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	MLG:{
        name:"Melgaço",
        code:"1603",
        lat:42.116667,
        long:-8.266667,
        area:238.25,
        population:7776,
        site:"https://www.cm-melgaco.pt/",
        district:"Viana do Castelo",
        parish:"13",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	MNC:{
        name:"Monção",
        code:"1604",
        lat:42.073333,
        long:-8.48,
        area:211.31,
        population:19230,
        site:"http://www.cm-moncao.pt",
        district:"Viana do Castelo",
        parish:"24",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	PCR:{
        name:"Paredes de Coura",
        code:"1605",
        lat:41.881667,
        long:-8.666389,
        area:138.19,
        population:9198,
        site:"https://www.paredesdecoura.pt",
        district:"Viana do Castelo",
        parish:"16",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	PTB:{
        name:"Ponte da Barca",
        code:"1606",
        lat:41.808611,
        long:-8.420833,
        area:182.11,
        population:12061,
        site:"http://www.cmpb.pt",
        district:"Viana do Castelo",
        parish:"17",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	PTL:{
        name:"Ponte de Lima",
        code:"1607",
        lat:41.766667,
        long:-8.583333,
        area:320.25,
        population:43498,
        site:"http://www.cm-pontedelima.pt/",
        district:"Viana do Castelo",
        parish:"39",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	VLN:{
        name:"Valença",
        code:"1608",
        lat:42.025833,
        long:-8.632778,
        area:117.13,
        population:13634,
        site:"https://cm-valenca.pt/",
        district:"Viana do Castelo",
        parish:"11",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	VCT:{
        name:"Viana do Castelo",
        code:"1609",
        lat:41.7,
        long:-8.833333,
        area:319.02,
        population:85784,
        site:"http://www.cm-viana-castelo.pt/",
        district:"Viana do Castelo",
        parish:"27",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	VNC:{
        name:"Vila Nova de Cerveira",
        code:"1610",
        lat:41.94,
        long:-8.744444,
        area:108.47,
        population:9253,
        site:"http://www.cm-vncerveira.pt/",
        district:"Viana do Castelo",
        parish:"11",
        nuts3:"Alto Minho",
        nuts2:"Norte",
    },
	ALJ:{
        name:"Alijó",
        code:"1701",
        lat:41.283333,
        long:-7.466667,
        area:297.60,
        population:10492,
        site:"https://www.cm-alijo.pt",
        district:"Vila Real",
        parish:"14",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	BTC:{
        name:"Boticas",
        code:"1702",
        lat:41.683333,
        long:-7.666667,
        area:321.96,
        population:5750,
        site:"http://www.cm-boticas.pt/",
        district:"Vila Real",
        parish:"10",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	CHV:{
        name:"Chaves",
        code:"1703",
        lat:41.75,
        long:-7.533333,
        area:591.23,
        population:41243,
        site:"http://www.chaves.pt/",
        district:"Vila Real",
        parish:"39",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	MSF:{
        name:"Mesão Frio",
        code:"1704",
        lat:41.166667,
        long:-7.883333,
        area:26.65,
        population:4433,
        site:"http://www.cm-mesaofrio.pt",
        district:"Vila Real",
        parish:"5",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	MDB:{
        name:"Mondim de Basto",
        code:"1705",
        lat:41.42,
        long:-7.958333,
        area:172.08,
        population:6410,
        site:"http://www.mondimdebasto.pt/",
        district:"Vila Real",
        parish:"6",
        nuts3:"Ave",
        nuts2:"Norte",
    },
	MTR:{
        name:"Montalegre",
        code:"1706",
        lat:41.823889,
        long:-7.79,
        area:805.46,
        population:10537,
        site:"http://www.cm-montalegre.pt/",
        district:"Vila Real",
        parish:"25",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	MUR:{
        name:"Murça",
        code:"1707",
        lat:41.408333,
        long:-7.453611,
        area:189.37,
        population:5245,
        site:"https://www.cm-murca.pt",
        district:"Vila Real",
        parish:"7",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	PRG:{
        name:"Peso da Régua",
        code:"1708",
        lat:41.16173,
        long:-7.78910,
        area:94.86,
        population:14553,
        site:"http://www.cm-pesoregua.pt/",
        district:"Vila Real",
        parish:"8",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	RPN:{
        name:"Ribeira de Pena",
        code:"1709",
        lat:41.519444,
        long:-7.814444,
        area:217.46,
        population:5887,
        site:"http://www.cm-rpena.pt/",
        district:"Vila Real",
        parish:"5",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	SBS:{
        name:"Sabrosa",
        code:"1710",
        lat:41.265278,
        long:-7.578056,
        area:156.92,
        population:6361,
        site:"https://www.sabrosa.pt",
        district:"Vila Real",
        parish:"12",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	SMP:{
        name:"Santa Marta de Penaguião",
        code:"1711",
        lat:41.210833,
        long:-7.784444,
        area:69.28,
        population:7356,
        site:"http://www.cm-smpenaguiao.pt/",
        district:"Vila Real",
        parish:"7",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	VLP:{
        name:"Valpaços",
        code:"1712",
        lat:41.6,
        long:-7.316667,
        area:548.74,
        population:16882,
        site:"http://www.valpacos.pt",
        district:"Vila Real",
        parish:"25",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	VPA:{
        name:"Vila Pouca de Aguiar",
        code:"1713",
        lat:41.501667,
        long:-7.647778,
        area:437.07,
        population:11813,
        site:"https://www.cm-vpaguiar.pt/",
        district:"Vila Real",
        parish:"14",
        nuts3:"Alto Tâmega",
        nuts2:"Norte",
    },
	VRL:{
        name:"Vila Real",
        code:"1714",
        lat:41.295833,
        long:-7.746111,
        area:378.80,
        population:49574,
        site:"http://www.cm-vilareal.pt",
        district:"Vila Real",
        parish:"20",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	AMM:{
        name:"Armamar",
        code:"1801",
        lat:41.116667,
        long:-7.683333,
        area:117.24,
        population:6297,
        site:"http://www.cm-armamar.pt",
        district:"Viseu",
        parish:"14",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	CRS:{
        name:"Carregal do Sal",
        code:"1802",
        lat:40.433333,
        long:-8,
        area:116.89,
        population:9835,
        site:"http://www.carregal-digital.pt",
        district:"Viseu",
        parish:"5",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	CDR:{
        name:"Castro Daire",
        code:"1803",
        lat:40.9,
        long:-7.933333,
        area:379.04,
        population:15339,
        site:"http://www.cm-castrodaire.pt/",
        district:"Viseu",
        parish:"16",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	CNF:{
        name:"Cinfães",
        code:"1804",
        lat:41.066667,
        long:-8.083333,
        area:239.29,
        population:20427,
        site:"http://www.cm-cinfaes.pt",
        district:"Viseu",
        parish:"14",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	LMG:{
        name:"Lamego",
        code:"1805",
        lat:41.083333,
        long:-7.866667,
        area:165.42,
        population:26691,
        site:"http://www.cm-lamego.pt",
        district:"Viseu",
        parish:"18",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	MGL:{
        name:"Mangualde",
        code:"1806",
        lat:40.6,
        long:-7.766667,
        area:219.26,
        population:19880,
        site:"http://www.cmmangualde.pt",
        district:"Viseu",
        parish:"12",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	MBR:{
        name:"Moimenta da Beira",
        code:"1807",
        lat:40.983333,
        long:-7.616667,
        area:200.00,
        population:10201,
        site:"http://www.cm-moimenta.pt/",
        district:"Viseu",
        parish:"16",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	MRT:{
        name:"Mortágua",
        code:"1808",
        lat:40.393056,
        long:-8.233333,
        area:251.18,
        population:9607,
        site:"http://www.cm-mortagua.pt",
        district:"Viseu",
        parish:"7",
        nuts3:"Região de Coimbra",
        nuts2:"Centro",
    },
	NLS:{
        name:"Nelas",
        code:"1809",
        lat:40.53,
        long:-7.855,
        area:125.71,
        population:13124,
        site:"http://www.cm-nelas.pt/",
        district:"Viseu",
        parish:"7",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	OFR:{
        name:"Oliveira de Frades",
        code:"1810",
        lat:40.747222,
        long:-8.173889,
        area:147.45,
        population:9510,
        site:"http://www.cm-ofrades.com/",
        district:"Viseu",
        parish:"8",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	PCT:{
        name:"Penalva do Castelo",
        code:"1811",
        lat:40.673889,
        long:-7.698056,
        area:134.34,
        population:7956,
        site:"https://www.cm-penalvadocastelo.pt/",
        district:"Viseu",
        parish:"11",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	PND:{
        name:"Penedono",
        code:"1812",
        lat:40.989444,
        long:-7.394722,
        area:133.71,
        population:2952,
        site:"https://www.cm-penedono.pt/",
        district:"Viseu",
        parish:"7",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	RSD:{
        name:"Resende",
        code:"1813",
        lat:41.1,
        long:-7.95,
        area:123.35,
        population:11364,
        site:"http://www.cm-resende.pt",
        district:"Viseu",
        parish:"11",
        nuts3:"Tâmega e Sousa",
        nuts2:"Norte",
    },
	SCD:{
        name:"Santa Comba Dão",
        code:"1814",
        lat:40.4,
        long:-8.133333,
        area:111.95,
        population:11597,
        site:"http://www.cm-santacombadao.pt/",
        district:"Viseu",
        parish:"6",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	SJP:{
        name:"São João da Pesqueira",
        code:"1815",
        lat:41.148056,
        long:-7.405,
        area:266.11,
        population:7874,
        site:"http://www.sjpesqueira.pt",
        district:"Viseu",
        parish:"11",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	SPS:{
        name:"São Pedro do Sul",
        code:"1816",
        lat:40.760833,
        long:-8.065556,
        area:348.95,
        population:16851,
        site:"http://www.cm-spsul.pt/",
        district:"Viseu",
        parish:"14",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	SAT:{
        name:"Sátão",
        code:"1817",
        lat:40.743056,
        long:-7.733056,
        area:201.94,
        population:11026,
        site:"http://www.cm-satao.pt/",
        district:"Viseu",
        parish:"9",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	SRN:{
        name:"Sernancelhe",
        code:"1818",
        lat:40.900278,
        long:-7.494444,
        area:228.61,
        population:5671,
        site:"http://www.cm-sernancelhe.pt",
        district:"Viseu",
        parish:"13",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	TBC:{
        name:"Tabuaço",
        code:"1819",
        lat:41.117489,
        long:-7.567675,
        area:133.86,
        population:6350,
        site:"http://www.cm-tabuaco.pt",
        district:"Viseu",
        parish:"13",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	TRC:{
        name:"Tarouca",
        code:"1820",
        lat:41.016667,
        long:-7.783333,
        area:100.08,
        population:8048,
        site:"http://www.cm-tarouca.pt",
        district:"Viseu",
        parish:"7",
        nuts3:"Douro",
        nuts2:"Norte",
    },
	TND:{
        name:"Tondela",
        code:"1821",
        lat:40.516667,
        long:-8.083333,
        area:371.22,
        population:28946,
        site:"http://www.cm-tondela.pt",
        district:"Viseu",
        parish:"19",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	VNP:{
        name:"Vila Nova de Paiva",
        code:"1822",
        lat:40.85,
        long:-7.733333,
        area:175.53,
        population:5176,
        site:"http://www.cm-vnpaiva.pt/",
        district:"Viseu",
        parish:"5",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	VIS:{
        name:"Viseu",
        code:"1823",
        lat:40.660833,
        long:-7.909444,
        area:507.10,
        population:99561,
        site:"http://www.cm-viseu.pt/",
        district:"Viseu",
        parish:"25",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
	VZL:{
        name:"Vouzela",
        code:"1824",
        lat:40.723056,
        long:-8.111944,
        area:193.69,
        population:10564,
        site:"http://www.cm-vouzela.pt",
        district:"Viseu",
        parish:"9",
        nuts3:"Viseu Dão-Lafões",
        nuts2:"Centro",
    },
}
const respostas = {
	"2022-12-05":{
        edition:"001",
        date:"2022-12-05",
        answer:"MTR",
    },
	"2022-12-06":{
        edition:"002",
        date:"2022-12-06",
        answer:"PGR",
    },
	"2022-12-07":{
        edition:"003",
        date:"2022-12-07",
        answer:"MTA",
    },
	"2022-12-08":{
        edition:"004",
        date:"2022-12-08",
        answer:"MAI",
    },
	"2022-12-09":{
        edition:"005",
        date:"2022-12-09",
        answer:"ALQ",
    },
	"2022-12-10":{
        edition:"006",
        date:"2022-12-10",
        answer:"NLS",
    },
	"2022-12-11":{
        edition:"007",
        date:"2022-12-11",
        answer:"VLC",
    },
	"2022-12-12":{
        edition:"008",
        date:"2022-12-12",
        answer:"VDG",
    },
	"2022-12-13":{
        edition:"009",
        date:"2022-12-13",
        answer:"FEC",
    },
	"2022-12-14":{
        edition:"010",
        date:"2022-12-14",
        answer:"LAG",
    },
	"2022-12-15":{
        edition:"011",
        date:"2022-12-15",
        answer:"PTB",
    },
	"2022-12-16":{
        edition:"012",
        date:"2022-12-16",
        answer:"PNH",
    },
	"2022-12-17":{
        edition:"013",
        date:"2022-12-17",
        answer:"VRM",
    },
	"2022-12-18":{
        edition:"014",
        date:"2022-12-18",
        answer:"VCD",
    },
	"2022-12-19":{
        edition:"015",
        date:"2022-12-19",
        answer:"VNB",
    },
	"2022-12-20":{
        edition:"016",
        date:"2022-12-20",
        answer:"CHV",
    },
	"2022-12-21":{
        edition:"017",
        date:"2022-12-21",
        answer:"BMT",
    },
	"2022-12-22":{
        edition:"018",
        date:"2022-12-22",
        answer:"MGR",
    },
	"2022-12-23":{
        edition:"019",
        date:"2022-12-23",
        answer:"VNH",
    },
	"2022-12-24":{
        edition:"020",
        date:"2022-12-24",
        answer:"TVR",
    },
	"2022-12-25":{
        edition:"021",
        date:"2022-12-25",
        answer:"PRS",
    },
	"2022-12-26":{
        edition:"022",
        date:"2022-12-26",
        answer:"SNS",
    },
	"2022-12-27":{
        edition:"023",
        date:"2022-12-27",
        answer:"CPR",
    },
	"2022-12-28":{
        edition:"024",
        date:"2022-12-28",
        answer:"MDR",
    },
	"2022-12-29":{
        edition:"025",
        date:"2022-12-29",
        answer:"SMA",
    },
	"2022-12-30":{
        edition:"026",
        date:"2022-12-30",
        answer:"VNC",
    },
	"2022-12-31":{
        edition:"027",
        date:"2022-12-31",
        answer:"VRS",
    },
	"2023-01-01":{
        edition:"028",
        date:"2023-01-01",
        answer:"CRT",
    },
	"2023-01-02":{
        edition:"029",
        date:"2023-01-02",
        answer:"LGS",
    },
	"2023-01-03":{
        edition:"030",
        date:"2023-01-03",
        answer:"VNP",
    },
	"2023-01-04":{
        edition:"031",
        date:"2023-01-04",
        answer:"ABF",
    },
	"2023-01-05":{
        edition:"032",
        date:"2023-01-05",
        answer:"PNF",
    },
	"2023-01-06":{
        edition:"033",
        date:"2023-01-06",
        answer:"TBR",
    },
	"2023-01-07":{
        edition:"034",
        date:"2023-01-07",
        answer:"CBT",
    },
	"2023-01-08":{
        edition:"035",
        date:"2023-01-08",
        answer:"ALR",
    },
	"2023-01-09":{
        edition:"036",
        date:"2023-01-09",
        answer:"VLR",
    },
	"2023-01-10":{
        edition:"037",
        date:"2023-01-10",
        answer:"OHP",
    },
	"2023-01-11":{
        edition:"038",
        date:"2023-01-11",
        answer:"GLG",
    },
	"2023-01-12":{
        edition:"039",
        date:"2023-01-12",
        answer:"RMZ",
    },
	"2023-01-13":{
        edition:"040",
        date:"2023-01-13",
        answer:"MRV",
    },
	"2023-01-14":{
        edition:"041",
        date:"2023-01-14",
        answer:"TMR",
    },
	"2023-01-15":{
        edition:"042",
        date:"2023-01-15",
        answer:"CMN",
    },
	"2023-01-16":{
        edition:"043",
        date:"2023-01-16",
        answer:"MDB",
    },
	"2023-01-17":{
        edition:"044",
        date:"2023-01-17",
        answer:"CSC",
    },
	"2023-01-18":{
        edition:"045",
        date:"2023-01-18",
        answer:"VCT",
    },
	"2023-01-19":{
        edition:"046",
        date:"2023-01-19",
        answer:"SJM",
    },
	"2023-01-20":{
        edition:"047",
        date:"2023-01-20",
        answer:"VNT",
    },
	"2023-01-21":{
        edition:"048",
        date:"2023-01-21",
        answer:"OAZ",
    },
	"2023-01-22":{
        edition:"049",
        date:"2023-01-22",
        answer:"GAV",
    },
	"2023-01-23":{
        edition:"050",
        date:"2023-01-23",
        answer:"FAR",
    },
	"2023-01-24":{
        edition:"051",
        date:"2023-01-24",
        answer:"MLG",
    },
	"2023-01-25":{
        edition:"052",
        date:"2023-01-25",
        answer:"MGD",
    },
	"2023-01-26":{
        edition:"053",
        date:"2023-01-26",
        answer:"CLB",
    },
	"2023-01-27":{
        edition:"054",
        date:"2023-01-27",
        answer:"FAF",
    },
	"2023-01-28":{
        edition:"055",
        date:"2023-01-28",
        answer:"AVT",
    },
	"2023-01-29":{
        edition:"056",
        date:"2023-01-29",
        answer:"VIZ",
    },
	"2023-01-30":{
        edition:"057",
        date:"2023-01-30",
        answer:"BRR",
    },
	"2023-01-31":{
        edition:"058",
        date:"2023-01-31",
        answer:"AZB",
    },
	"2023-02-01":{
        edition:"059",
        date:"2023-02-01",
        answer:"ETR",
    },
	"2023-02-02":{
        edition:"060",
        date:"2023-02-02",
        answer:"SNT",
    },
	"2023-02-03":{
        edition:"061",
        date:"2023-02-03",
        answer:"BCL",
    },
	"2023-02-04":{
        edition:"062",
        date:"2023-02-04",
        answer:"VVC",
    },
	"2023-02-05":{
        edition:"063",
        date:"2023-02-05",
        answer:"NZR",
    },
	"2023-02-06":{
        edition:"064",
        date:"2023-02-06",
        answer:"AGB",
    },
	"2023-02-07":{
        edition:"065",
        date:"2023-02-07",
        answer:"OBD",
    },
	"2023-02-08":{
        edition:"066",
        date:"2023-02-08",
        answer:"VLN",
    },
	"2023-02-09":{
        edition:"067",
        date:"2023-02-09",
        answer:"STR",
    },
	"2023-02-10":{
        edition:"068",
        date:"2023-02-10",
        answer:"EVR",
    },
	"2023-02-11":{
        edition:"069",
        date:"2023-02-11",
        answer:"VNG",
    },
	"2023-02-12":{
        edition:"070",
        date:"2023-02-12",
        answer:"MDL",
    },
	"2023-02-13":{
        edition:"071",
        date:"2023-02-13",
        answer:"PCV",
    },
	"2023-02-14":{
        edition:"072",
        date:"2023-02-14",
        answer:"VVR",
    },
	"2023-02-15":{
        edition:"073",
        date:"2023-02-15",
        answer:"LMG",
    },
	"2023-02-16":{
        edition:"074",
        date:"2023-02-16",
        answer:"ASL",
    },
	"2023-02-17":{
        edition:"075",
        date:"2023-02-17",
        answer:"TCS",
    },
	"2023-02-18":{
        edition:"076",
        date:"2023-02-18",
        answer:"SVV",
    },
	"2023-02-19":{
        edition:"077",
        date:"2023-02-19",
        answer:"OVR",
    },
	"2023-02-20":{
        edition:"078",
        date:"2023-02-20",
        answer:"VLG",
    },
	"2023-02-21":{
        edition:"079",
        date:"2023-02-21",
        answer:"ETZ",
    },
	"2023-02-22":{
        edition:"080",
        date:"2023-02-22",
        answer:"VNF",
    },
	"2023-02-23":{
        edition:"081",
        date:"2023-02-23",
        answer:"CBC",
    },
	"2023-02-24":{
        edition:"082",
        date:"2023-02-24",
        answer:"PNC",
    },
	"2023-02-25":{
        edition:"083",
        date:"2023-02-25",
        answer:"MTJ",
    },
	"2023-02-26":{
        edition:"084",
        date:"2023-02-26",
        answer:"GDM",
    },
	"2023-02-27":{
        edition:"085",
        date:"2023-02-27",
        answer:"VFX",
    },
	"2023-02-28":{
        edition:"086",
        date:"2023-02-28",
        answer:"CTB",
    },
	"2023-03-01":{
        edition:"087",
        date:"2023-03-01",
        answer:"PSR",
    },
	"2023-03-02":{
        edition:"088",
        date:"2023-03-02",
        answer:"MRS",
    },
	"2023-03-03":{
        edition:"089",
        date:"2023-03-03",
        answer:"ACH",
    },
	"2023-03-04":{
        edition:"090",
        date:"2023-03-04",
        answer:"VVD",
    },
	"2023-03-05":{
        edition:"091",
        date:"2023-03-05",
        answer:"PNV",
    },
	"2023-03-06":{
        edition:"092",
        date:"2023-03-06",
        answer:"VND",
    },
	"2023-03-07":{
        edition:"093",
        date:"2023-03-07",
        answer:"LSB",
    },
	"2023-03-08":{
        edition:"094",
        date:"2023-03-08",
        answer:"FVN",
    },
	"2023-03-09":{
        edition:"095",
        date:"2023-03-09",
        answer:"MTL",
    },
	"2023-03-10":{
        edition:"096",
        date:"2023-03-10",
        answer:"SBS",
    },
	"2023-03-11":{
        edition:"097",
        date:"2023-03-11",
        answer:"PNI",
    },
	"2023-03-12":{
        edition:"098",
        date:"2023-03-12",
        answer:"AVR",
    },
	"2023-03-13":{
        edition:"099",
        date:"2023-03-13",
        answer:"BTC",
    },
	"2023-03-14":{
        edition:"100",
        date:"2023-03-14",
        answer:"BAO",
    },
	"2023-03-15":{
        edition:"101",
        date:"2023-03-15",
        answer:"PVZ",
    },
	"2023-03-16":{
        edition:"102",
        date:"2023-03-16",
        answer:"LOU",
    },
	"2023-03-17":{
        edition:"103",
        date:"2023-03-17",
        answer:"BGC",
    },
	"2023-03-18":{
        edition:"104",
        date:"2023-03-18",
        answer:"SCD",
    },
	"2023-03-19":{
        edition:"105",
        date:"2023-03-19",
        answer:"PPS",
    },
	"2023-03-20":{
        edition:"106",
        date:"2023-03-20",
        answer:"CHM",
    },
	"2023-03-21":{
        edition:"107",
        date:"2023-03-21",
        answer:"BRG",
    },
	"2023-03-22":{
        edition:"108",
        date:"2023-03-22",
        answer:"ILH",
    },
	"2023-03-23":{
        edition:"109",
        date:"2023-03-23",
        answer:"STC",
    },
	"2023-03-24":{
        edition:"110",
        date:"2023-03-24",
        answer:"SJP",
    },
	"2023-03-25":{
        edition:"111",
        date:"2023-03-25",
        answer:"BNV",
    },
	"2023-03-26":{
        edition:"112",
        date:"2023-03-26",
        answer:"CVD",
    },
	"2023-03-27":{
        edition:"113",
        date:"2023-03-27",
        answer:"ALD",
    },
	"2023-03-28":{
        edition:"114",
        date:"2023-03-28",
        answer:"STB",
    },
	"2023-03-29":{
        edition:"115",
        date:"2023-03-29",
        answer:"FAG",
    },
	"2023-03-30":{
        edition:"116",
        date:"2023-03-30",
        answer:"CNT",
    },
	"2023-03-31":{
        edition:"117",
        date:"2023-03-31",
        answer:"AVS",
    },
	"2023-04-01":{
        edition:"118",
        date:"2023-04-01",
        answer:"TBU",
    },
	"2023-04-02":{
        edition:"119",
        date:"2023-04-02",
        answer:"MOU",
    },
	"2023-04-03":{
        edition:"120",
        date:"2023-04-03",
        answer:"AJZ",
    },
	"2023-04-04":{
        edition:"121",
        date:"2023-04-04",
        answer:"AGD",
    },
	"2023-04-05":{
        edition:"122",
        date:"2023-04-05",
        answer:"AMT",
    },
	"2023-04-06":{
        edition:"123",
        date:"2023-04-06",
        answer:"CRZ",
    },
	"2023-04-07":{
        edition:"124",
        date:"2023-04-07",
        answer:"OBR",
    },
	"2023-04-08":{
        edition:"125",
        date:"2023-04-08",
        answer:"LRA",
    },
	"2023-04-09":{
        edition:"126",
        date:"2023-04-09",
        answer:"MMN",
    },
	"2023-04-10":{
        edition:"127",
        date:"2023-04-10",
        answer:"BBR",
    },
	"2023-04-11":{
        edition:"128",
        date:"2023-04-11",
        answer:"AMM",
    },
	"2023-04-12":{
        edition:"129",
        date:"2023-04-12",
        answer:"CTM",
    },
	"2023-04-13":{
        edition:"130",
        date:"2023-04-13",
        answer:"MMV",
    },
	"2023-04-14":{
        edition:"131",
        date:"2023-04-14",
        answer:"CLD",
    },
	"2023-04-15":{
        edition:"132",
        date:"2023-04-15",
        answer:"SRD",
    },
	"2023-04-16":{
        edition:"133",
        date:"2023-04-16",
        answer:"ANS",
    },
	"2023-04-17":{
        edition:"134",
        date:"2023-04-17",
        answer:"NIS",
    },
	"2023-04-18":{
        edition:"135",
        date:"2023-04-18",
        answer:"BJA",
    },
	"2023-04-19":{
        edition:"136",
        date:"2023-04-19",
        answer:"TRC",
    },
	"2023-04-20":{
        edition:"137",
        date:"2023-04-20",
        answer:"TNV",
    },
	"2023-04-21":{
        edition:"138",
        date:"2023-04-21",
        answer:"MTS",
    },
	"2023-04-22":{
        edition:"139",
        date:"2023-04-22",
        answer:"GMR",
    },
	"2023-04-23":{
        edition:"140",
        date:"2023-04-23",
        answer:"CBA",
    },
	"2023-04-24":{
        edition:"141",
        date:"2023-04-24",
        answer:"ARR",
    },
	"2023-04-25":{
        edition:"142",
        date:"2023-04-25",
        answer:"MRA",
    },
	"2023-04-26":{
        edition:"143",
        date:"2023-04-26",
        answer:"MFR",
    },
	"2023-04-27":{
        edition:"144",
        date:"2023-04-27",
        answer:"FCR",
    },
	"2023-04-28":{
        edition:"145",
        date:"2023-04-28",
        answer:"MCQ",
    },
	"2023-04-29":{
        edition:"146",
        date:"2023-04-29",
        answer:"ADV",
    },
	"2023-04-30":{
        edition:"147",
        date:"2023-04-30",
        answer:"MCV",
    },
	"2023-05-01":{
        edition:"148",
        date:"2023-05-01",
        answer:"SRN",
    },
	"2023-05-02":{
        edition:"149",
        date:"2023-05-02",
        answer:"TRF",
    },
	"2023-05-03":{
        edition:"150",
        date:"2023-05-03",
        answer:"MGL",
    },
	"2023-05-04":{
        edition:"151",
        date:"2023-05-04",
        answer:"SBA",
    },
	"2023-05-05":{
        edition:"152",
        date:"2023-05-05",
        answer:"VFR",
    },
	"2023-05-06":{
        edition:"153",
        date:"2023-05-06",
        answer:"CNS",
    },
	"2023-05-07":{
        edition:"154",
        date:"2023-05-07",
        answer:"SEI",
    },
	"2023-05-08":{
        edition:"155",
        date:"2023-05-08",
        answer:"TBC",
    },
	"2023-05-09":{
        edition:"156",
        date:"2023-05-09",
        answer:"ARC",
    },
	"2023-05-10":{
        edition:"157",
        date:"2023-05-10",
        answer:"ACB",
    },
	"2023-05-11":{
        edition:"158",
        date:"2023-05-11",
        answer:"CDR",
    },
	"2023-05-12":{
        edition:"159",
        date:"2023-05-12",
        answer:"VLF",
    },
	"2023-05-13":{
        edition:"160",
        date:"2023-05-13",
        answer:"ELV",
    },
	"2023-05-14":{
        edition:"161",
        date:"2023-05-14",
        answer:"SSL",
    },
	"2023-05-15":{
        edition:"162",
        date:"2023-05-15",
        answer:"VMS",
    },
	"2023-05-16":{
        edition:"163",
        date:"2023-05-16",
        answer:"VPA",
    },
	"2023-05-17":{
        edition:"164",
        date:"2023-05-17",
        answer:"FND",
    },
	"2023-05-18":{
        edition:"165",
        date:"2023-05-18",
        answer:"CVL",
    },
	"2023-05-19":{
        edition:"166",
        date:"2023-05-19",
        answer:"BRC",
    },
	"2023-05-20":{
        edition:"167",
        date:"2023-05-20",
        answer:"OFR",
    },
	"2023-05-21":{
        edition:"168",
        date:"2023-05-21",
        answer:"BRB",
    },
	"2023-05-22":{
        edition:"169",
        date:"2023-05-22",
        answer:"MCD",
    },
	"2023-05-23":{
        edition:"170",
        date:"2023-05-23",
        answer:"MOR",
    },
	"2023-05-24":{
        edition:"171",
        date:"2023-05-24",
        answer:"SBG",
    },
	"2023-05-25":{
        edition:"172",
        date:"2023-05-25",
        answer:"RPN",
    },
	"2023-05-26":{
        edition:"173",
        date:"2023-05-26",
        answer:"LLE",
    },
	"2023-05-27":{
        edition:"174",
        date:"2023-05-27",
        answer:"PVL",
    },
	"2023-05-28":{
        edition:"175",
        date:"2023-05-28",
        answer:"SPS",
    },
	"2023-05-29":{
        edition:"176",
        date:"2023-05-29",
        answer:"PTM",
    },
	"2023-05-30":{
        edition:"177",
        date:"2023-05-30",
        answer:"PRL",
    },
	"2023-05-31":{
        edition:"178",
        date:"2023-05-31",
        answer:"RSD",
    },
	"2023-06-01":{
        edition:"179",
        date:"2023-06-01",
        answer:"AFE",
    },
	"2023-06-02":{
        edition:"180",
        date:"2023-06-02",
        answer:"PRD",
    },
	"2023-06-03":{
        edition:"181",
        date:"2023-06-03",
        answer:"MLD",
    },
	"2023-06-04":{
        edition:"182",
        date:"2023-06-04",
        answer:"CTX",
    },
	"2023-06-05":{
        edition:"183",
        date:"2023-06-05",
        answer:"AVZ",
    },
	"2023-06-06":{
        edition:"184",
        date:"2023-06-06",
        answer:"IDN",
    },
	"2023-06-07":{
        edition:"185",
        date:"2023-06-07",
        answer:"ESP",
    },
	"2023-06-08":{
        edition:"186",
        date:"2023-06-08",
        answer:"SRP",
    },
	"2023-06-09":{
        edition:"187",
        date:"2023-06-09",
        answer:"MIR",
    },
	"2023-06-10":{
        edition:"188",
        date:"2023-06-10",
        answer:"TVD",
    },
	"2023-06-11":{
        edition:"189",
        date:"2023-06-11",
        answer:"ENT",
    },
	"2023-06-12":{
        edition:"190",
        date:"2023-06-12",
        answer:"GDL",
    },
	"2023-06-13":{
        edition:"191",
        date:"2023-06-13",
        answer:"SMP",
    },
	"2023-06-14":{
        edition:"192",
        date:"2023-06-14",
        answer:"SXL",
    },
	"2023-06-15":{
        edition:"193",
        date:"2023-06-15",
        answer:"VLP",
    },
	"2023-06-16":{
        edition:"194",
        date:"2023-06-16",
        answer:"GRD",
    },
	"2023-06-17":{
        edition:"195",
        date:"2023-06-17",
        answer:"FAL",
    },
	"2023-06-18":{
        edition:"196",
        date:"2023-06-18",
        answer:"SRE",
    },
	"2023-06-19":{
        edition:"197",
        date:"2023-06-19",
        answer:"PNL",
    },
	"2023-06-20":{
        edition:"198",
        date:"2023-06-20",
        answer:"MFT",
    },
	"2023-06-21":{
        edition:"199",
        date:"2023-06-21",
        answer:"RMR",
    },
	"2023-06-22":{
        edition:"200",
        date:"2023-06-22",
        answer:"EPS",
    },
	"2023-06-23":{
        edition:"201",
        date:"2023-06-23",
        answer:"GVA",
    },
	"2023-06-24":{
        edition:"202",
        date:"2023-06-24",
        answer:"CNF",
    },
	"2023-06-25":{
        edition:"203",
        date:"2023-06-25",
        answer:"PRT",
    },
	"2023-06-26":{
        edition:"204",
        date:"2023-06-26",
        answer:"TMC",
    },
	"2023-06-27":{
        edition:"205",
        date:"2023-06-27",
        answer:"AMD",
    },
	"2023-06-28":{
        edition:"206",
        date:"2023-06-28",
        answer:"GOI",
    },
	"2023-06-29":{
        edition:"207",
        date:"2023-06-29",
        answer:"AND",
    },
	"2023-06-30":{
        edition:"208",
        date:"2023-06-30",
        answer:"PTL",
    },
	"2023-07-01":{
        edition:"209",
        date:"2023-07-01",
        answer:"PRG",
    },
	"2023-07-02":{
        edition:"210",
        date:"2023-07-02",
        answer:"PBL",
    },
	"2023-07-03":{
        edition:"211",
        date:"2023-07-03",
        answer:"OLR",
    },
	"2023-07-04":{
        edition:"212",
        date:"2023-07-04",
        answer:"SAT",
    },
	"2023-07-05":{
        edition:"213",
        date:"2023-07-05",
        answer:"AVV",
    },
	"2023-07-06":{
        edition:"214",
        date:"2023-07-06",
        answer:"MAC",
    },
	"2023-07-07":{
        edition:"215",
        date:"2023-07-07",
        answer:"MED",
    },
	"2023-07-08":{
        edition:"216",
        date:"2023-07-08",
        answer:"SMG",
    },
	"2023-07-09":{
        edition:"217",
        date:"2023-07-09",
        answer:"LNH",
    },
	"2023-07-10":{
        edition:"218",
        date:"2023-07-10",
        answer:"VFL",
    },
	"2023-07-11":{
        edition:"219",
        date:"2023-07-11",
        answer:"MSF",
    },
	"2023-07-12":{
        edition:"220",
        date:"2023-07-12",
        answer:"ALB",
    },
	"2023-07-13":{
        edition:"221",
        date:"2023-07-13",
        answer:"MTG",
    },
	"2023-07-14":{
        edition:"222",
        date:"2023-07-14",
        answer:"OLH",
    },
	"2023-07-15":{
        edition:"223",
        date:"2023-07-15",
        answer:"ODM",
    },
	"2023-07-16":{
        edition:"224",
        date:"2023-07-16",
        answer:"FTR",
    },
	"2023-07-17":{
        edition:"225",
        date:"2023-07-17",
        answer:"FZZ",
    },
	"2023-07-18":{
        edition:"226",
        date:"2023-07-18",
        answer:"CVR",
    },
	"2023-07-19":{
        edition:"227",
        date:"2023-07-19",
        answer:"MRT",
    },
	"2023-07-20":{
        edition:"228",
        date:"2023-07-20",
        answer:"TND",
    },
	"2023-07-21":{
        edition:"229",
        date:"2023-07-21",
        answer:"ADL",
    },
	"2023-07-22":{
        edition:"230",
        date:"2023-07-22",
        answer:"VGS",
    },
	"2023-07-23":{
        edition:"231",
        date:"2023-07-23",
        answer:"PND",
    },
	"2023-07-24":{
        edition:"232",
        date:"2023-07-24",
        answer:"APC",
    },
	"2023-07-25":{
        edition:"233",
        date:"2023-07-25",
        answer:"STS",
    },
	"2023-07-26":{
        edition:"234",
        date:"2023-07-26",
        answer:"ORQ",
    },
	"2023-07-27":{
        edition:"235",
        date:"2023-07-27",
        answer:"MBR",
    },
	"2023-07-28":{
        edition:"236",
        date:"2023-07-28",
        answer:"PMS",
    },
	"2023-07-29":{
        edition:"237",
        date:"2023-07-29",
        answer:"AGN",
    },
	"2023-07-30":{
        edition:"238",
        date:"2023-07-30",
        answer:"ACN",
    },
	"2023-07-31":{
        edition:"239",
        date:"2023-07-31",
        answer:"ACT",
    },
	"2023-08-01":{
        edition:"240",
        date:"2023-08-01",
        answer:"PCR",
    },
	"2023-08-02":{
        edition:"241",
        date:"2023-08-02",
        answer:"VBP",
    },
	"2023-08-03":{
        edition:"242",
        date:"2023-08-03",
        answer:"ARV",
    },
	"2023-08-04":{
        edition:"243",
        date:"2023-08-04",
        answer:"OER",
    },
	"2023-08-05":{
        edition:"244",
        date:"2023-08-05",
        answer:"BTL",
    },
	"2023-08-06":{
        edition:"245",
        date:"2023-08-06",
        answer:"ALJ",
    },
	"2023-08-07":{
        edition:"246",
        date:"2023-08-07",
        answer:"CDN",
    },
	"2023-08-08":{
        edition:"247",
        date:"2023-08-08",
        answer:"MUR",
    },
	"2023-08-09":{
        edition:"248",
        date:"2023-08-09",
        answer:"SRT",
    },
	"2023-08-10":{
        edition:"249",
        date:"2023-08-10",
        answer:"LSA",
    },
	"2023-08-11":{
        edition:"250",
        date:"2023-08-11",
        answer:"FIG",
    },
	"2023-08-12":{
        edition:"251",
        date:"2023-08-12",
        answer:"ODV",
    },
	"2023-08-13":{
        edition:"252",
        date:"2023-08-13",
        answer:"MNC",
    },
	"2023-08-14":{
        edition:"253",
        date:"2023-08-14",
        answer:"PFR",
    },
	"2023-08-15":{
        edition:"254",
        date:"2023-08-15",
        answer:"CDV",
    },
	"2023-08-16":{
        edition:"255",
        date:"2023-08-16",
        answer:"SSB",
    },
	"2023-08-17":{
        edition:"256",
        date:"2023-08-17",
        answer:"AJT",
    },
	"2023-08-18":{
        edition:"257",
        date:"2023-08-18",
        answer:"VRL",
    },
	"2023-08-19":{
        edition:"258",
        date:"2023-08-19",
        answer:"VIS",
    },
	"2023-08-20":{
        edition:"259",
        date:"2023-08-20",
        answer:"RDD",
    },
	"2023-08-21":{
        edition:"260",
        date:"2023-08-21",
        answer:"PCT",
    },
	"2023-08-22":{
        edition:"261",
        date:"2023-08-22",
        answer:"CMR",
    },
	"2023-08-23":{
        edition:"262",
        date:"2023-08-23",
        answer:"LRS",
    },
	"2023-08-24":{
        edition:"263",
        date:"2023-08-24",
        answer:"MCN",
    },
	"2023-08-25":{
        edition:"264",
        date:"2023-08-25",
        answer:"CPV",
    },
	"2023-08-26":{
        edition:"265",
        date:"2023-08-26",
        answer:"FLG",
    },
	"2023-08-27":{
        edition:"266",
        date:"2023-08-27",
        answer:"AMR",
    },
	"2023-08-28":{
        edition:"267",
        date:"2023-08-28",
        answer:"PLM",
    },
	"2023-08-29":{
        edition:"268",
        date:"2023-08-29",
        answer:"ALT",
    },
	"2023-08-30":{
        edition:"269",
        date:"2023-08-30",
        answer:"ABT",
    },
	"2023-08-31":{
        edition:"270",
        date:"2023-08-31",
        answer:"ARL",
    },
	"2023-09-01":{
        edition:"271",
        date:"2023-09-01",
        answer:"PTG",
    },
	"2023-09-02":{
        edition:"272",
        date:"2023-09-02",
        answer:"VZL",
    },
	"2023-09-03":{
        edition:"273",
        date:"2023-09-03",
        answer:"ORM",
    },
	"2023-09-04":{
        edition:"274",
        date:"2023-09-04",
        answer:"SLV",
    },
	"2023-09-05":{
        edition:"275",
        date:"2023-09-05",
        answer:"CRS",
    },
	"2023-09-06":{
        edition:"276",
        date:"2023-09-06",
        answer:"CBR",
    },
	"2023-09-07":{
        edition:"277",
        date:"2023-09-07",
        answer:"CCH",
    },
	"2023-09-08":{
        edition:"278",
        date:"2023-09-08",
        answer:"ALM",
    },
};

function ifMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector(':root').style.setProperty('--modalFont','12px');
    } else {
        document.querySelector(':root').style.setProperty('--modalFont','small');
    };
};

function haversine(lat1, long1, lat2, long2) {
    lat1*=Math.PI/180; long1*=Math.PI/180; lat2*=Math.PI/180; long2*=Math.PI/180;
    let r = 6378.137;
    let pointA = [r*Math.cos(lat1)*Math.cos(long1), r*Math.cos(lat1)*Math.sin(long1), r*Math.sin(lat1)];
    let pointB = [r*Math.cos(lat2)*Math.cos(long2), r*Math.cos(lat2)*Math.sin(long2), r*Math.sin(lat2)];
    let d = Math.sqrt((pointA[0]-pointB[0])**2 + (pointA[1]-pointB[1])**2 + (pointA[2]-pointB[2])**2)
    return Math.round(d);
};

function direction(lat1, long1, lat2, long2) {
    let dir="";
    let teta = Math.atan(Math.abs(lat1-lat2)/Math.abs(long2-long1))
    let A = Math.abs(lat1)-Math.abs(lat2);
    let B = Math.abs(long2)-Math.abs(long1);
    teta*=180/Math.PI;
    if (A==0 && B==0) {
        return "&#9989";
    };
    if (teta<=22.5) {
        dir = (B >= 0) ? "⬅️":"➡️";
    } else if (teta<=67.5) {
        if (B >= 0) {
            dir = (A >= 0) ? "↙️":"↖️";
        } else {
            dir = (A >= 0) ? "↘️":"↗️";
        }
    } else if (teta<=90) {
        dir = (A >= 0) ? "⬇️":"⬆️";
    };
    return dir;
};

var Co,Do;
var count=0;
var share="";
var bingo=false;
var ans_list=[];
var time = new Date();
var streak = new Array();

function firstGame() {
    if (undefined===localStorage.stats || localStorage.stats==='') {
        localStorage.setItem('stats', new Array());
    } else {
        streak = localStorage.stats.split(',');
    }
};

function startGame() {
    ifMobile();
    if (navigator.userAgent.indexOf("Edge") != -1) {
        document.querySelector(':root').style.setProperty('--emoji','24px');
    } else {
        document.querySelector(':root').style.setProperty('--emoji','30px');
    }
    time = time.toISOString();
    time = time.slice(0,10);
    if (localStorage.version != version) clearGameData();
    if (time==localStorage.timeStg) {
        restoreData();
        document.getElementById("inp").disabled = false;
        document.getElementById("sub").disabled = false;
    } else {
        clearGameData();
        buildSite();
        localStorage.setItem("timeStg",time);
        Co = respostas[localStorage.timeStg].answer;
        Do = respostas[localStorage.timeStg].date;
        document.getElementById("brazao").src = "brazoes/"+concelhos[Co].code+"b.png";
        saveData();
    };
    firstGame();
    colorMode(toBool(localStorage.Dark));
    document.getElementById('inp').addEventListener('input', optionsAvailableModal);
};

function getRndProv() {
    let len = codcelhos.length;
    return codcelhos[Math.floor(Math.random()*len)];
};

function getDistance(guess) {
    return haversine(concelhos[guess].lat,concelhos[guess].long,concelhos[Co].lat,concelhos[Co].long);
};

function setDirection(guess) {
    return direction(concelhos[guess].lat,concelhos[guess].long,concelhos[Co].lat,concelhos[Co].long);
};

function strFormat(s) {
    var r = s.toLowerCase();
    r = r.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return r;
};

function toBool(str) {
    if (str==='true') {
        return true;
    } else if (str==='false') {
        return false;
    } else {
        return Boolean(str);
    }
}

function buildSite() {
    document.body.innerHTML += '<h1><span class="howto" onclick="howToModal()">❔</span> <span class="about" onclick="aboutModal()">🔎</span>CON<span style="color:red">C</span><span style="color:yellow"></span><span style="color:green"></span>ELHO DIÁRIO<span class="settings" onclick="settingsModal()">⚙️</span> <span class="stats" onclick="statsModal()">📊</span></h1>';
    document.body.innerHTML += '<div id="window" class="modalbg"><div id="dropdown" class="modalcnt"></div></div>';
    document.body.innerHTML += '<div style="height:170px"><img id="brazao" src="" style="height:170px;width:auto"></div><br>';
    for (let i=1; i<=6; i++) {
        document.body.innerHTML += '<div id="line'+i.toString()+'" class="flex_row"></div>';
    };
    document.body.innerHTML += '<br><div id="optionlist" class="optionmodal"><div id="oplist" class="optioncnt"></div></div><form id="try" name="tries" method="post" onsubmit="validateAnswer();return false"><input id="inp" type="text" name="guess" class="input" placeholder="Concelho..."><br><input type="submit" id="sub" class="button" value="Submeter"></form>';
    //optionsAvailable();
    document.body.innerHTML += '<button id="sharing" class="button share" onclick="clipboard()">Partilhar</button>';
    document.getElementById("sharing").hidden = true;
};

function saveData() {
    localStorage.setItem("version", version);
    localStorage.setItem("thisbody",document.body.innerHTML);
    localStorage.setItem("countStg",count);
    localStorage.setItem("CoStg",Co);
    localStorage.setItem("DoStg",Do);
    localStorage.setItem("shareStg",share);
    localStorage.setItem("bingoStg",bingo);
    localStorage.setItem("anslistStg",ans_list);
};

function clearGameData() {
    localStorage.removeItem("thisbody");
    localStorage.removeItem("countStg");
    localStorage.removeItem("CoStg");
    localStorage.removeItem("DoStg");
    localStorage.removeItem("shareStg");
    localStorage.removeItem("bingoStg");
    localStorage.removeItem("anslistStg");
    localStorage.removeItem("timeStg");
    localStorage.removeItem("version");
}

function restoreData() {
    stopModal(1000);
    document.body.innerHTML = localStorage.thisbody;
    count = Number(localStorage.countStg);
    Co = localStorage.CoStg;
    Do = localStorage.DoStg;
    share = localStorage.shareStg;
    bingo = toBool(localStorage.bingoStg);
    if (localStorage.anslistStg=="" || undefined===localStorage.anslistStg) {
        ans_list = [];
    } else {
        ans_list = localStorage.anslistStg.split(',');
    };
    repeatAnimations();
};

function validateAnswer() {
    document.getElementById("optionlist").style.display = "none";
    let val = document.forms["tries"]["guess"].value;
    let prov = strFormat(val);
    let check = true;
    let ans;
    for (let i in conchnames) {
        if (conchnames[i] == prov) {
            check = false;
            ans = i;
            break;
        };
    };
    if (check) {return false;};
    count+=1;
    let scount = count.toString();
    ans = codcelhos[ans];
    ans_list = ans_list.concat([ans]);
    let sqrlist = squares(ans);
    share += colorEmoji(sqrlist[0].split(' ').join(''))+"\n"
    let target = document.getElementById("line"+scount);
    target.style.backgroundColor = "var(--darker)";
    function enter_ans(bool) {
        document.getElementById("inp").disabled = bool;
        document.getElementById("sub").disabled = bool;
    }
    function animations() {
        enter_ans(true);
        var str_box = '<div id="box'+scount+'" style="width:45ex" class="left"></div><div id="per'+scount+'" style="width:9ex"></div>';
        target.innerHTML = str_box;
        animateStr("box"+scount,sqrlist[0],1500);
        animateNum("per"+scount,0,sqrlist[1],1500);
    };
    function afterAnimations() {
        str_box = '<div id="ans'+scount+'" style="width:35ex" class="zoominout"></div><div id="dis'+scount+'" style="width:10ex" class="zoominout"></div><div id="dir'+scount+'" style="width:4ex" class="zoominout"></div><div id="per'+scount+'" style="width:9ex" class="zoominout"></div>';
        target.innerHTML = str_box;
        document.getElementById("ans"+scount).innerHTML = concelhos[ans].name;
        document.getElementById("dis"+scount).innerHTML = getDistance(ans)+"km";
        document.getElementById("dir"+scount).innerHTML = setDirection(ans);
        document.getElementById("per"+scount).innerHTML = sqrlist[1].toString()+"%";

        enter_ans(false);
    };
    
    function rightWrong() {
        let ending = false;
        let winLose = '';
        if (sqrlist[1]==100) {
            ending = true;
            winLose = "w";
        } else if (count==6 && sqrlist[1]!=100) {
            ending = true;
            winLose = "l";
        };
        if (ending) {
            stopModal(4010);
            bingo=true;
            document.getElementById("try").hidden = true;
            scount = winLose==='w' ? scount:'X';
            streak[Number(respostas[Do].edition)-1] = scount;
            localStorage.setItem('stats',streak);
            share = "concelhodiario.pt #"+respostas[Do].edition+" "+scount+"/6\n\n"+share;
            setTimeout(function() {
                document.getElementById("brazao").src = "brazoes/"+concelhos[Co].code+".png";
                document.getElementById("sharing").hidden = false;
                resultModal(sqrlist[1]==100);
            }, 2005);
        } else {document.getElementById("try").reset();bingo=false;stopModal(2005);};
    };
    animations();
    setTimeout(afterAnimations,2000);
    rightWrong();
    saveData();
};

function resultModal(bool) {
    stopModal(3005);
    document.querySelector(":root").style.setProperty('--modalheight',"80px");
    document.getElementById("dropdown").className = "modalcnt open";
    document.getElementById("window").style.display = "block";
    document.getElementById("dropdown").innerHTML = '<div id="results"></div>';
    if (bool) {
        document.getElementById("results").innerHTML = `Parabéns, acertaste!<br>Descobre mais sobre ${concelhos[Co].name} no menu 🔎!`;
    } else {
        document.getElementById("results").innerHTML = `Mais sorte para a próxima...<br>A resposta certa era ${concelhos[Co].name}!<br>Descobre mais sobre ${concelhos[Co].name} no menu 🔎!`;
    }
    setTimeout(function () {
        document.getElementById("dropdown").className = "modalcnt close";
        setTimeout(function() {document.getElementById("window").style.display = "none";},805);
    },3000);
}

function stopModal(time) {
    let child = document.createElement('div');
    document.body.appendChild(child);
    child.setAttribute('id','blocker');
    document.getElementById('blocker').style.display = "block";
    setTimeout(function() {document.getElementById('blocker').style.display = "none";document.body.removeChild(child)},time);
}

function touchtest() {
    alert("touch works");
}

function clipboard() {
    navigator.clipboard.writeText(sharedEmoji(share)).then(function() {
        stopModal(3005);
        document.querySelector(":root").style.setProperty('--modalheight',"75px");
        document.getElementById("dropdown").className = "modalcnt open";
        document.getElementById("window").style.display = "block";
        document.getElementById("dropdown").innerHTML = '<div id="results"></div>';
        document.getElementById("results").innerHTML = 'Copiado para a área de transferência';
        setTimeout(function () {
            document.getElementById("dropdown").className = "modalcnt close";
            setTimeout(function() {document.getElementById("window").style.display = "none";},805);
        },3000);
    }, function() {
        alert("Não foi possível copiar para a área de transferência.");
    });
};

function giveUp() {
    document.getElementById("tenta").disabled = true;
    document.getElementById("sub").disabled = true;
    document.getElementById("brazao").src = "brazoes/"+concelhos[Co].code+".png";
};

function squares(ans) {
    let percentage = Math.floor((1-getDistance(ans)/maxDistance())*100);
    function maxDistance() {
        let possible = [].concat(codcelhos);
        possible.forEach(maxD);
        function maxD(item,index,arr) {
            arr[index] = getDistance(item);
        };
        return Math.max(...possible);
    }
    let square_row="";
    for (let i=0; i<=4; i++) {
        if (percentage>i*22) {
            if (percentage<=i*22+11) {
                square_row += "yellow ";
            } else {
                square_row += "green ";
            };
        } else {
            square_row += "black ";
        };
    };
    return [square_row,percentage];
};

function animateNum(id, start, end, duration) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(incr, stepTime);
    function incr() {
        current += increment;
        obj.innerHTML = current.toString() + "%";
        if (current == end) {
            clearInterval(timer);
        }
    };
};

function animateStr(id, str, duration) {
    let stepT = Math.floor(duration/5);
    let objc = document.getElementById(id);
    let char = 0;
    let full_str = "";
    let lst_str = str.split(' ');
    let timer = setInterval(appear, stepT);
    function appear() {
        full_str += lst_str[char];
        objc.innerHTML = colorEmoji(full_str);
        char+=1;
        if (char == 5) {
            clearInterval(timer);
        };
    };
};

function optionsAvailable() {
    let options = "";
    for (let i of conchnames_com_acentos) {
        options += '<option value="'+i+'"></option>';
    }
    document.getElementById("posoptions").innerHTML = options;
};

function optionsAvailableModal() {
    let str = strFormat(document.getElementById('inp').value);
    document.getElementById("oplist").innerHTML = '';
    if (str!='') {
        document.getElementById("optionlist").style.display = "block";
    } else {
        document.getElementById("optionlist").style.display = "none";
    }
    let options = [];
    conchnames.forEach(function(value) { if (value.indexOf(str)!==-1) {options=options.concat([value])};});
    options = options.sort();
    let height = options.length*30;
    document.querySelector(":root").style.setProperty('--optionH',`${height}px`);
    options.forEach(function(value) {document.getElementById("oplist").innerHTML += `<div>${conchnames_com_acentos[conchnames.indexOf(value)]}</div>`;});
    document.querySelectorAll(".optioncnt > div").forEach(function(value) {value.onclick = setInput;});
    window.onclick = closeModal;
    function setInput() {
        document.getElementById('inp').value = this.innerHTML;
        document.getElementById("optionlist").style.display = "none";
    }
}

function colorEmoji(str) {
    str = str.replaceAll('black','&#11035').replaceAll('yellow','&#129000').replaceAll('green','&#129001').replaceAll(' ','');
    return str;
};

function sharedEmoji(str) {
    str = str.replaceAll('&#11035','⬛️').replaceAll('&#129000','🟨').replaceAll('&#129001','🟩');
    return str;
}

function repeatAnimations() {
    for (let i=1; i<=count; i++) {
        let cd = ans_list[i-1];
        let sq = squares(cd);
        let si = i.toString();
        document.getElementById("line"+si).innerHTML = '<div id="box'+si+'" style="width:45ex" class="left"></div><div id="per'+si+'" style="width:9ex"></div>';
        animateStr("box"+i,sq[0],1500);
        animateNum("per"+i,0,sq[1],1500);
        setTimeout(function() {
            document.getElementById("line"+si).innerHTML = '<div id="ans'+si+'" style="width:35ex" class="zoominout"></div><div id="dis'+si+'" style="width:10ex" class="zoominout"></div><div id="dir'+si+'" style="width:4ex" class="zoominout"></div><div id="per'+si+'" style="width:9ex" class="zoominout"></div>';
            document.getElementById("ans"+si).innerHTML = concelhos[cd].name;
            document.getElementById("dis"+si).innerHTML = getDistance(cd)+"km";
            document.getElementById("dir"+si).innerHTML = setDirection(cd);
            document.getElementById("per"+si).innerHTML = sq[1].toString()+"%";
            if (bingo) {
                document.getElementById("brazao").src = "brazoes/"+concelhos[Co].code+".png";
                document.getElementById("sharing").hidden = false;
            };
        },2000);
    };
};

function howToModal() {
    if (document.querySelector("h1").style.zIndex == "2" && document.getElementById("dropdown").innerHTML[4]=="I") {
        document.querySelector("h1").style.zIndex = "0";
        document.getElementById("dropdown").className = "modalcnt close";
        setTimeout(function() {document.getElementById("window").style.display = "none";},805);
        return;
    }
    setTimeout(function() {document.querySelector("h1").style.zIndex = "2";},805);
    document.querySelector(":root").style.setProperty('--modalheight',"92%");
    document.getElementById("dropdown").className = "modalcnt open";
    document.getElementById("window").style.display = "block";
    document.getElementById("dropdown").innerHTML =`<h2>INSTRUÇÕES</h2>
    <div>
    <p>Adivinha o <b>CON<span style="color:red">C</span>ELHO DIÁRIO</b> em 6 tentativas.</p>
    <p>Tens como pista o brazão associado ao município correto. Apenas podes submeter concelhos válidos, com ou sem acentuação/capitalização.</p>
    <p>A cada tentativa terás mais pistas, indicando a distância, a direcção e a proximidade, sendo que 0% significa o mais longe possível e 100% a resposta correta.</p></div>
    <div>
    <p>A distância entre concelhos corresponde à distância aproximada entre os seus pontos centrais, pelo que concelhos vizinhos mostrarão distâncias diferentes de 0km.</p>
    <p>Por exemplo, embora os municípios de Nelas e Viseu partilhem fronteiras, estão distanciados em 20km.</p></div>
    <div>
    <p><b>Exemplo</b></p>
    <p><span class="examplecenter"><span style="width:35ex" class="example">Nelas</span><span style="width:10ex" class="example">68km</span><span style="width:4ex" class="example">⬅️</span><span style="width:9ex" class="example">83%</span></span></p>
    <p>A tentativa acima mostra que o concelho correto encontra-se a 68km a oeste de <b>Nelas</b>, com uma proximidade de 83%.</p>
    <p><span class="examplecenter"><span style="width:35ex" class="example">Ílhavo</span><span style="width:10ex" class="example">4km</span><span style="width:4ex" class="example">↗️</span><span style="width:9ex" class="example">99%</span></span></p>
    <p>Já a tentativa <b>Ílhavo</b> está a apenas 4km da resposta correta, com 99% de proximidade! São provavelmente concelhos vizinhos.</p>
    <p><span class="examplecenter"><span style="width:35ex" class="example">Aveiro</span><span style="width:10ex" class="example">0km</span><span style="width:4ex" class="example">✅</span><span style="width:9ex" class="example">100%</span></span></p>
    <p>A tentativa <b>Aveiro</b> é a respota correta!</p>
    <p>No fim poderás <b><span style="color:green">partilhar</span></b> as tuas jogadas com os teus amigos!</p></div>
    <div>
    <p>O <b>CON<span style="color:red">C</span>ELHO DIÁRIO</b> mudará todos os dias!</p></div>
    <div>
    <p><b>CON<span style="color:red">C</span>ELHO DIÁRIO</b> foi criado por <a href="https://www.instagram.com/tquintas_____/">@tquintas_____</a> (inspirado em <b><a href="https://powerlanguage.co.uk/wordle/">WORDLE</a></b>, criado por <a href="https://twitter.com/powerlanguish">Josh Wardle</a>), em tributo a <b><a href="https://worldle.teuteuf.fr">WOR<span style="color:green">L</span>DLE</a></b>, criado por <a href="https://twitter.com/teuteuf">@teuteuf</a>.</p></div>
    `;
    mylinks();

};

function settingsModal() {
    if (document.querySelector("h1").style.zIndex == "2" && document.getElementById("dropdown").innerHTML[4]=="D") {
        document.querySelector("h1").style.zIndex = "0";
        document.getElementById("dropdown").className = "modalcnt close";
        setTimeout(function() {document.getElementById("window").style.display = "none";},805);
        return;
    }
    setTimeout(function() {document.querySelector("h1").style.zIndex = "2";},805);
    let che = (getComputedStyle(document.querySelector(":root")).getPropertyValue('--darker')=="rgb(21,21,21)") ? "":"checked";
    document.querySelector(":root").style.setProperty('--modalheight',"92%");
    document.getElementById("dropdown").className = "modalcnt open";
    document.getElementById("window").style.display = "block";
    document.getElementById("dropdown").innerHTML =`<h2>DEFINIÇÕES</h2>
    <p id="defs">Modo escuro/claro<label class="switch">
        <input id="mode" type="checkbox" onclick="darklightmode()" ${che}>
        <span class="slider"></span>
    </label></p>
    `
};

function aboutModal() {
    if (document.querySelector("h1").style.zIndex == "2" && document.getElementById("dropdown").innerHTML[4]=="A") {
        document.querySelector("h1").style.zIndex = "0";
        document.getElementById("dropdown").className = "modalcnt close";
        setTimeout(function() {document.getElementById("window").style.display = "none";},805);
        return;
    }
    setTimeout(function() {document.querySelector("h1").style.zIndex = "2";},805);
    let conc = (bingo) ? concelhos[Co].name:"...";
    let portugal = toBool(localStorage.Dark) ? respostas[Do].answer:respostas[Do].answer+"b";
    let region = concelhos[Co].nuts2=='Algarve' ? `no <b>${concelhos[Co].nuts2}</b>`: concelhos[Co].nuts2=='Área Metropolitana de Lisboa' ? `na <b>${concelhos[Co].nuts2}</b>`:concelhos[Co].nuts2=='Alentejo' ? `no <b>${concelhos[Co].nuts2}</b>, situado na zona conhecida como <b>${concelhos[Co].nuts3}</b>`: `no <b>${concelhos[Co].nuts2}</b> de Portugal, situado na zona conhecida como <b>${concelhos[Co].nuts3}</b>`;
    document.querySelector(":root").style.setProperty('--modalheight',"92%");
    document.getElementById("dropdown").className = "modalcnt open";
    document.getElementById("window").style.display = "block";
    document.getElementById("dropdown").innerHTML =`<h2>Acerca de ${conc}</h2>`;
    if (bingo) {
        document.getElementById("dropdown").innerHTML += `<div><p style="text-align:center"><b>${conc}</b> é um município situado no distrito de <b>${concelhos[Co].district}</b>, ${region}.</p>
        <p style="text-align:center"><b>${conc}</b> tem <b>${concelhos[Co].area}</b> quilómetros quadrados de área e <b>${concelhos[Co].population}</b> habitantes, distribuídos por <b>${concelhos[Co].parish}</b> freguesias.</p>
        <p style="text-align:center"><img src="locais/${portugal}.png" style="width:8cm;height:auto;margin-right:75px"></p>
        <p style="text-align:center"><b><a style="font-size:18px" href="${concelhos[Co].site}">Visite ${conc}!</a></b></p></div>`;
    } else {
        document.getElementById("dropdown").innerHTML += '<div><p style="text-align:center">Descobre o <b>CON<span style="color:red">C</span>ELHO DIÁRIO</b> para desbloquear este menu!</p></div>';
    }
    mylinks();
}

function statsModal() {
    if (document.querySelector("h1").style.zIndex == "2" && document.getElementById("dropdown").innerHTML[4]=="E") {
        document.querySelector("h1").style.zIndex = "0";
        document.getElementById("dropdown").className = "modalcnt close";
        setTimeout(function() {document.getElementById("window").style.display = "none";},805);
        return;
    }
    setTimeout(function() {document.querySelector("h1").style.zIndex = "2";},805);
    document.querySelector(":root").style.setProperty('--modalheight',"92%");
    document.getElementById("dropdown").className = "modalcnt open";
    document.getElementById("window").style.display = "block";
    document.getElementById("dropdown").innerHTML = '<h2>ESTATÍSTICA</h2>';
    firstGame();
    let hm = arrayCount(streak);
    let max = Math.max(...Object.values(hm));
    let gs = streakStat(streak);
    let slength = streak ? streak.length-hm['']:0;
    document.getElementById("dropdown").innerHTML += `<div><table class="stattable"><tr><td>${slength}</td><td>${gs['current']}</td><td>${gs['max']}</td></tr>
    <tr><td style="font-size:12px;font-weight:normal">Nº de jogos</td><td style="font-size:12px;font-weight:normal">Atual sequência<br>de vitórias</td><td style="font-size:12px;font-weight:normal">Maior sequência<br>de vitórias</td></tr></table><br><br></div>`;
    document.getElementById("dropdown").innerHTML += '<div id="chart"><p style="padding-left:2cm"><b>Distribuição:</b></p></div>';
    for (let i=1; i<=7; i++) {
        let widths = [];
        for (let ele in hm) {
            widths = widths.concat([Math.round((hm[ele]/max)*95)/10]);
        }
        let ii = i==7 ? "X":i;
        document.getElementById("chart").innerHTML += `<p style="text-align:left;padding-left:1cm"><span id="ylabels"><b>${ii}</b></span><span id="row${ii}" class="bars"></span></p>`;
        document.getElementById(`row${ii}`).style.width = `calc(${widths[i-1]}cm + 15px`;
        document.getElementById(`row${ii}`).innerHTML = hm[ii];
    };
    if (bingo) {
        document.getElementById(`row${streak.slice(-1)[0]}`).style.backgroundColor = "rgb(112, 167, 30)";
    };
};

function arrayCount(arr) {
    let count = {'1':0, '2':0, '3':0, '4':0, '5':0, '6':0, 'X':0, '':0};
    if (arr) {
        for (let i of arr) {
            count[i] += 1;
        };
    };
    return count;
};

function streakStat(arr) {
    let a = new Array();
    let n = 0;
    if (arr) {
        for (let el in arr) {
            if (arr[el]!='X' && arr[el]!='') {n+=1} else {a=a.concat([n]);n=0};
        } a=a.concat([n]);
    };
    let current = a.length!==0 ? a[a.length-1]:0;
    let max = a.length!==0 ? Math.max(...a):0;
    let ret = {'current':current, 'max':max};
    return ret;
};

//window.onclick = closeModal;

function closeModal(event) {
    if (event.target == document.getElementById("optionlist")) {
        document.getElementById("optionlist").style.display = "none";
    };
};

function mylinks() {
    var links = document.body.getElementsByTagName("a");
    for (let i of links) {
        i.setAttribute("target","_blank"); 
        i.setAttribute("rel","noreferrer noopener");
    }
}

function darklightmode() {
    let isIt = document.getElementById("mode").checked;
    colorMode(isIt);
    localStorage.setItem("Dark",isIt);
}

function colorMode(bool) {
    let root = document.querySelector(":root");
    if (bool) {
        root.style.setProperty('--light',"rgb(21,21,21)");
        root.style.setProperty('--darker',"antiquewhite");
        root.style.setProperty('--dark',"rgb(179, 167, 152)");
        root.style.setProperty('--pholder',"rgb(86,86,86)");
        document.getElementsByClassName("howto")[0].innerHTML = "❓";
    } else {
        root.style.setProperty('--light',"antiquewhite");
        root.style.setProperty('--darker',"rgb(21,21,21)");
        root.style.setProperty('--dark',"rgb(52,52,52)");
        root.style.setProperty('--pholder',"rgb(169,169,169)");
        document.getElementsByClassName("howto")[0].innerHTML = "❔";
    }
}