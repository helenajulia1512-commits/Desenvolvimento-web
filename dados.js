/* Ajuste os nomes das subpastas de estado (ex.: "espirito santo" ou "Espirito Santo")
   caso estejam com maiúsculas ou acentos no seu computador. */

const CIDADES = {
    "juiz de fora": {
        nome: "Juiz de Fora - MG",
        fotoCabecalho: "imagem de cidades/minas gerais/juiz de fora.morro do cristo.jpg",
        fotoFundo: "imagem de cidades/minas gerais/juiz de fora.prefeitura.jpg",
        descricao: "Conhecida como a Manchester Mineira, Juiz de Fora une a hospitalidade do interior de Minas com uma cena gastronômica agitada de bares, cafés e restaurantes tradicionais.",
        pratosTipicos: "Torresmo de rolo, feijão tropeiro, pão de queijo e cervejas artesanais",
        restaurantes: [
            { nome: "Milos Restaurante", bairro: "Alto dos Passos", tipo: "Mediterrâneo e wine bar", emoji: "🍷", preco: 3, nota: 4.9, diferenciais: ["vinhos", "ocasiões especiais"], endereco: "Rua Dom Viçoso" },
            { nome: "Chimarron Churrascaria", bairro: "Manoel Honório", tipo: "Churrascaria com rodízio", emoji: "🥩", preco: 2, nota: 4.7, diferenciais: ["rodízio", "sushi", "buffet de saladas"], endereco: "Pátio Manoel Honório" },
            { nome: "Assunta", bairro: "São Mateus", tipo: "Cozinha internacional", emoji: "🍽️", preco: 3, nota: 4.5, diferenciais: ["jantar sofisticado", "boa carta de vinhos"], endereco: "Ladeira Alexandre Leonel, 221, Loja 102" },
            { nome: "Pepper Pizzaria Artesanal", bairro: "São Mateus", tipo: "Pizzaria artesanal", emoji: "🍕", preco: 2, nota: 5.0, diferenciais: ["pizza artesanal"], endereco: "" },
            { nome: "Berttu's", bairro: "Centro", tipo: "Mineira e italiana", emoji: "🍲", preco: 2, nota: 4.5, diferenciais: ["comida mineira", "massas e pizza"], endereco: "" },
            { nome: "Bom Brasileiro", bairro: "Centro", tipo: "Café", emoji: "☕", preco: 1, nota: 4.9, diferenciais: ["ótimo espresso", "bom e barato"], endereco: "" }
        ]
    },

    "ouro preto": {
        nome: "Ouro Preto - MG",
        fotoCabecalho: "imagem de cidades/minas gerais/Ouro preto.cidade.jpg",
        fotoFundo: "imagem de cidades/minas gerais/Ouro preto.igreja.jpg",
        descricao: "Entre ladeiras históricas e igrejas barrocas, Ouro Preto preserva o sabor autêntico da cozinha mineira feita no fogão a lenha e em panelas de pedra-sabão.",
        pratosTipicos: "Frango com quiabo, tutu à mineira, ora-pro-nóbis, doce de leite e cachaça artesanal",
        restaurantes: [
            { nome: "Contos de Réis", bairro: "Centro Histórico", tipo: "Comida mineira", emoji: "🍲", preco: 2, nota: 4.6, diferenciais: ["fogão a lenha", "casarão colonial"], endereco: "Rua Camilo de Brito, 21" },
            { nome: "Bené da Flauta", bairro: "Centro Histórico", tipo: "Mineira e contemporânea", emoji: "🍽️", preco: 3, nota: 4.7, diferenciais: ["vista para a igreja", "pratos típicos"], endereco: "Rua São Francisco de Assis, 32" },
            { nome: "O Passo Pizza Jazz", bairro: "Centro Histórico", tipo: "Pizzaria e massas", emoji: "🍕", preco: 3, nota: 4.8, diferenciais: ["música ao vivo", "ambiente histórico"], endereco: "Rua São José, 56" },
            { nome: "Chafariz", bairro: "Centro Histórico", tipo: "Comida mineira", emoji: "🥘", preco: 2, nota: 4.5, diferenciais: ["buffet mineiro", "sobremesas caseiras"], endereco: "Rua São José, 167" }
        ]
    },

    "vila velha": {
        nome: "Vila Velha - ES",
        fotoCabecalho: "imagem de cidades/espirito santo/vilavelha.farol.jpg",
        fotoFundo: "imagem de cidades/espirito santo/vilavelha.convento da penha.jpg",
        descricao: "Cidade mais antiga do Espírito Santo, Vila Velha combina praias urbanas, o visual do Convento da Penha e a tradição dos frutos do mar servidos na panela de barro.",
        pratosTipicos: "Moqueca capixaba, torta capixaba, peroá frito e casquinha de siri",
        restaurantes: [
            { nome: "Atlântica", bairro: "Praia da Costa", tipo: "Frutos do mar", emoji: "🦐", preco: 3, nota: 4.6, diferenciais: ["frente para o mar", "moqueca capixaba"], endereco: "Av. Antônio Gil Veloso, 80" },
            { nome: "Caranguejo do Assis", bairro: "Praia de Itaparica", tipo: "Frutos do mar e bar", emoji: "🦀", preco: 2, nota: 4.5, diferenciais: ["caranguejo", "porções fartas"], endereco: "Av. da Praia, 290" },
            { nome: "Preferito", bairro: "Praia da Costa", tipo: "Italiana e contemporânea", emoji: "🍝", preco: 3, nota: 4.7, diferenciais: ["massas artesanais", "carta de vinhos"], endereco: "Rua Henrique Moscoso, 1020" },
            { nome: "Chocolates Garoto (Loja e Café)", bairro: "Glória", tipo: "Cafeteria e doceria", emoji: "🍫", preco: 1, nota: 4.8, diferenciais: ["tradição local", "doces e cafés"], endereco: "Praça Meyerfreund, 1" }
        ]
    },

    "vitoria": {
        nome: "Vitória - ES",
        fotoCabecalho: "imagem de cidades/espirito santo/vitoria.museu.jpg",
        fotoFundo: "imagem de cidades/espirito santo/vitoria.igreja.jpg",
        descricao: "Ilha cercada por baías e manguezais, Vitória é o berço das paneleiras de Goiabeiras e oferece uma culinária litorânea marcada pelo azeite de urucum e peixes frescos.",
        pratosTipicos: "Moqueca capixaba na panela de barro, bobó de camarão, muma de siri e torta capixaba",
        restaurantes: [
            { nome: "Pirão", bairro: "Ilha das Caieiras", tipo: "Frutos do mar", emoji: "🐟", preco: 2, nota: 4.6, diferenciais: ["vista para o manguezal", "torta capixaba"], endereco: "Rua Felicidade Correia dos Santos, 54" },
            { nome: "Papaguth", bairro: "Praia do Suá", tipo: "Cozinha capixaba", emoji: "🥘", preco: 3, nota: 4.7, diferenciais: ["vista para a Terceira Ponte", "moqueca"], endereco: "Av. Nossa Senhora dos Navegantes, 700" },
            { nome: "Aleixo", bairro: "Praia do Canto", tipo: "Contemporânea e frutos do mar", emoji: "🍽️", preco: 3, nota: 4.8, diferenciais: ["ambiente sofisticado", "peixes frescos"], endereco: "Rua Aleixo Netto, 1204" },
            { nome: "Lareira Portuguesa", bairro: "Centro", tipo: "Portuguesa e frutos do mar", emoji: "🍷", preco: 2, nota: 4.6, diferenciais: ["bacalhau", "restaurante tradicional"], endereco: "Av. Jerônimo Monteiro, 631" }
        ]
    },

    "niteroi": {
        nome: "Niterói - RJ",
        fotoCabecalho: "imagem de cidades/rio de janeiro/niteroi. ponto.jpg",
        fotoFundo: "imagem de cidades/rio de janeiro/niteroi.fortalezadesantacruz.jpg",
        descricao: "Do outro lado da Baía de Guanabara, Niterói mistura arquitetura modernista, vistas para o Rio de Janeiro e excelentes polos gastronômicos em São Francisco e Jurujuba.",
        pratosTipicos: "Peixe frito com pirão, caldeirada de frutos do mar, bolinho de bacalhau e chope gelado",
        restaurantes: [
            { nome: "Seu Antônio", bairro: "Jurujuba", tipo: "Frutos do mar", emoji: "🦐", preco: 2, nota: 4.7, diferenciais: ["beira da praia", "peixes frescos"], endereco: "Av. Carlos Ermelindo Marins, 1000" },
            { nome: "Olimpo", bairro: "Charitas", tipo: "Contemporânea e frutos do mar", emoji: "🍽️", preco: 3, nota: 4.6, diferenciais: ["vista panorâmica da baía", "ocasiões especiais"], endereco: "Av. Quintino Bocaiúva, s/n" },
            { nome: "Caneco Gelado do Mário", bairro: "Centro", tipo: "Boteco tradicional", emoji: "🍺", preco: 1, nota: 4.8, diferenciais: ["bolinho de bacalhau", "histórico desde 1968"], endereco: "Rua Visconde do Uruguai, 288" },
            { nome: "Noi São Francisco", bairro: "São Francisco", tipo: "Cervejaria e carnes", emoji: "🍔", preco: 2, nota: 4.6, diferenciais: ["cervejas artesanais", "hambúrgueres e petiscos"], endereco: "Av. Quintino Bocaiúva, 201" }
        ]
    },

    "rio de janeiro": {
        nome: "Rio de Janeiro - RJ",
        fotoCabecalho: "imagem de cidades/rio de janeiro/riodejaneiro.cristoredentor.jpg",
        fotoFundo: "imagem de cidades/rio de janeiro/riodejaneiro.praia.jpg",
        descricao: "Entre o mar e a montanha, a gastronomia carioca vai dos botecos históricos com petiscos clássicos às confeitarias centenárias e casas de feijoada.",
        pratosTipicos: "Feijoada carioca, filé à Oswaldo Aranha, bolinho de feijoada, biscoito Globo e mate",
        restaurantes: [
            { nome: "Confeitaria Colombo", bairro: "Centro", tipo: "Café e confeitaria", emoji: "☕", preco: 3, nota: 4.6, diferenciais: ["patrimônio histórico", "doces portugueses"], endereco: "Rua Gonçalves Dias, 32" },
            { nome: "Bar do Mineiro", bairro: "Santa Teresa", tipo: "Brasileira e boteco", emoji: "🥘", preco: 2, nota: 4.6, diferenciais: ["feijoada", "pastel de feijão"], endereco: "Rua Paschoal Carlos Magno, 99" },
            { nome: "Cervantes", bairro: "Copacabana", tipo: "Lanchonete e restaurante", emoji: "🥪", preco: 2, nota: 4.5, diferenciais: ["sanduíche de pernil com abacaxi", "clássico carioca"], endereco: "Av. Prado Júnior, 335" },
            { nome: "Aprazível", bairro: "Santa Teresa", tipo: "Brasileira contemporânea", emoji: "🌿", preco: 3, nota: 4.7, diferenciais: ["vista para a cidade", "culinária brasileira"], endereco: "Rua Aprazível, 62" }
        ]
    },

    "sao paulo": {
        nome: "São Paulo - SP",
        fotoCabecalho: "imagem de cidades/sao paulo/Saopaulo.museu do ipiranga.jpg",
        fotoFundo: "imagem de cidades/sao paulo/Saopaulo.catedral da se.jpg",
        descricao: "Capital gastronômica do país, São Paulo reúne influências italianas, japonesas, nordestinas e paulistas em padarias tradicionais, cantinas e mercados históricos.",
        pratosTipicos: "Virado à paulista, sanduíche de mortadela, pastel de feira, pizza paulistana e coxinha",
        restaurantes: [
            { nome: "Hocca Bar (Mercadão)", bairro: "Centro", tipo: "Lanches e tradicional", emoji: "🥪", preco: 2, nota: 4.5, diferenciais: ["sanduíche de mortadela", "pastel de bacalhau"], endereco: "Rua da Cantareira, 306" },
            { nome: "Famiglia Mancini", bairro: "Bela Vista", tipo: "Cantina italiana", emoji: "🍝", preco: 3, nota: 4.7, diferenciais: ["massas fartas", "ambiente festivo"], endereco: "Rua Avanhandava, 81" },
            { nome: "Bar do Estadão", bairro: "Centro", tipo: "Lanchonete e boteco", emoji: "🍖", preco: 1, nota: 4.6, diferenciais: ["sanduíche de pernil", "tradicional 24h"], endereco: "Viaduto Nove de Julho, 193" },
            { nome: "Aska Lamen", bairro: "Liberdade", tipo: "Japonesa", emoji: "🍜", preco: 1, nota: 4.8, diferenciais: ["lámen artesanal", "bom e barato"], endereco: "Rua Galvão Bueno, 466" }
        ]
    },

    "sao jose dos campos": {
        nome: "São José dos Campos - SP",
        fotoCabecalho: "imagem de cidades/sao paulo/saojosedoscampos.cidade.jpg",
        fotoFundo: "imagem de cidades/sao paulo/saojosedoscampos.cachoeira.jpg",
        descricao: "Coração do Vale do Paraíba, São José dos Campos combina modernidade tecnológica com a tradição caipira do interior paulista e culinária tropeira.",
        pratosTipicos: "Bolinho caipira, afogado, feijão tropeiro e doces caseiros do Vale do Paraíba",
        restaurantes: [
            { nome: "Mercado Municipal (Banca de Bolinho Caipira)", bairro: "Centro", tipo: "Comida típica", emoji: "🥟", preco: 1, nota: 4.7, diferenciais: ["bolinho caipira tradicional", "preço acessível"], endereco: "Travessa Chico Luiz, 67" },
            { nome: "Sheriff", bairro: "Jardim Aquarius", tipo: "Carnes e hamburgueria", emoji: "🥩", preco: 2, nota: 4.6, diferenciais: ["cortes grelhados", "ambiente familiar"], endereco: "Av. Cassiano Ricardo, 1590" },
            { nome: "Edo Zushi", bairro: "Jardim Esplanada", tipo: "Japonesa", emoji: "🍣", preco: 3, nota: 4.7, diferenciais: ["culinária japonesa tradicional", "combinados frescos"], endereco: "Av. São João, 644" },
            { nome: "Cantina da Nona", bairro: "Vila Adyana", tipo: "Italiana", emoji: "🍝", preco: 2, nota: 4.6, diferenciais: ["massas caseiras", "molhos artesanais"], endereco: "Rua Eng. Prudente Meireles de Morais, 326" }
        ]
    },

    "curitiba": {
        nome: "Curitiba - PR",
        fotoCabecalho: "imagem de cidades/sul do brasil/regiaosulista. pontoturistico.curitiba.jpg",
        fotoFundo: "imagem de cidades/sul do brasil/regiaosulista.ruadasflores.curitiba.jpg",
        descricao: "Referência em parques e planejamento urbano, Curitiba reflete a forte imigração europeia — especialmente italiana, polonesa e alemã — em seus bairros gastronômicos.",
        pratosTipicos: "Barreado, carne de onça, pierogi, polenta com frango e pinhão",
        restaurantes: [
            { nome: "Madalosso", bairro: "Santa Felicidade", tipo: "Italiana tradicional", emoji: "🍝", preco: 2, nota: 4.6, diferenciais: ["rodízio de massas e frango", "clássico de Curitiba"], endereco: "Av. Manoel Ribas, 5875" },
            { nome: "Bar do Alemão", bairro: "São Francisco", tipo: "Alemã e boteco", emoji: "🍺", preco: 2, nota: 4.7, diferenciais: ["carne de onça", "submarino e chope"], endereco: "Rua Dr. Claudino dos Santos, 63" },
            { nome: "Terrazza 40", bairro: "Bigorrilho", tipo: "Contemporânea", emoji: "🌇", preco: 3, nota: 4.6, diferenciais: ["vista panorâmica da cidade", "jantar especial"], endereco: "Rua Padre Anchieta, 1287" },
            { nome: "Confeitaria das Famílias", bairro: "Centro", tipo: "Café e confeitaria", emoji: "🍰", preco: 1, nota: 4.7, diferenciais: ["tortas tradicionais", "no calçadão da Rua XV"], endereco: "Rua XV de Novembro, 374" }
        ]
    },

    "porto alegre": {
        nome: "Porto Alegre - RS",
        fotoCabecalho: "imagem de cidades/sul do brasil/regiaosulista.portoalegre.pontofarol.jpg",
        fotoFundo: "imagem de cidades/sul do brasil/regiaosulista.portoalegre.MARGS.jpg",
        descricao: "Às margens do Guaíba, Porto Alegre celebra a cultura gaúcha com churrascarias históricas, cafés clássicos no Centro e o tradicional xis nos bairros.",
        pratosTipicos: "Churrasco gaúcho, costela 12 horas, arroz carreteiro, xis gaúcho e chimarrão",
        restaurantes: [
            { nome: "Churrascaria Barranco", bairro: "Petrópolis", tipo: "Churrascaria", emoji: "🥩", preco: 3, nota: 4.7, diferenciais: ["espeto corrido", "mesas ao ar livre"], endereco: "Av. Protásio Alves, 1578" },
            { nome: "Gambrinus", bairro: "Centro Histórico", tipo: "Portuguesa e gaúcha", emoji: "🐟", preco: 2, nota: 4.6, diferenciais: ["dentro do Mercado Público", "histórico desde 1889"], endereco: "Largo Glênio Peres, s/n" },
            { nome: "Atelier de Massas", bairro: "Centro Histórico", tipo: "Italiana", emoji: "🍝", preco: 3, nota: 4.8, diferenciais: ["massas artesanais", "ambiente artístico"], endereco: "Rua Riachuelo, 1482" },
            { nome: "Speed Lanches", bairro: "Bom Fim", tipo: "Lanchonete", emoji: "🍔", preco: 1, nota: 4.6, diferenciais: ["xis gaúcho tradicional", "bom e barato"], endereco: "Av. Osvaldo Aranha, 1188" }
        ]
    }
};