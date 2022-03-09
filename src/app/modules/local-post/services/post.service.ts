import {
  Observable
} from 'rxjs';
import {
  Injectable
} from '@angular/core';
import {
  Article
} from 'src/app/shared/Entities/article';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  arcticle = {
    "totalArticles": 106166,
    "articles": [{
        "title": "Palácio dos Esportes, inaugurado em 1935, é arrematado por R$ 9 milhões em leilão",
        "description": "Empresa vai instalar empreendimento turístico no local; projeto deve ser apresentado em 90 dias",
        "content": "Foto: Mateus Pereira / GOVBA O Edifício do Palácio dos Esportes, localizado na Praça Castro Alves, em Salvador, foi arrematado por R$ 9,01 milhões. O leilão do imóvel inaugurado em 1935 aconteceu na manhã desta terça-feira (8).\nSegundo o governo da B... [1170 chars]",
        "url": "https://www.ibahia.com/bahia/detalhe/noticia/palacio-dos-esportes-inaugurado-em-1935-e-arrematado-por-r-9-milhoes-em-leilao/",
        "image": "https://www.ibahia.com/fileadmin/_processed_/7/7/csm_palacio_dos_esportes_2ab8040b57.png",
        "publishedAt": "2022-03-08T22:55:00Z",
        "source": {
          "name": "iBahia",
          "url": "https://www.ibahia.com"
        }
      },
      {
        "title": "Council will not repair road with potholes ‘the size of craters’",
        "description": "One local councillor warned of an 'impending catastrophe' along the road, which the council asserts is not their responsibility",
        "content": "Something went wrong, please try again later.\nGet the best local news with our Sefton newsletter\nA local councillor warned there could be an “impending catastrophe” in a Sefton Road with potholes \"the size of craters\" which the council refuses to mai... [3225 chars]",
        "url": "https://www.liverpoolecho.co.uk/news/liverpool-news/council-not-repair-road-potholes-23330843",
        "image": "https://i2-prod.liverpoolecho.co.uk/incoming/article23330832.ece/ALTERNATES/s1200/0_Knob-Hall-Lane-Southport-Photo-by-Colin-Lane.jpg",
        "publishedAt": "2022-03-08T22:30:00Z",
        "source": {
          "name": "Liverpool Echo",
          "url": "https://www.liverpoolecho.co.uk"
        }
      },
      {
        "title": "Rússia vai abrir corredores humanitários em 5 cidades ucranianas, diz agência Tass",
        "description": "OTTAWA (Reuters) - As forças russas vão parar de disparar a partir das 10h de quarta-feira (horário local) e estão prontas para fornecer corredores",
        "content": "OTTAWA (Reuters) – As forças russas vão parar de disparar a partir das 10h de quarta-feira (horário local) e estão prontas para fornecer corredores humanitários para que as pessoas possam deixar Kiev e outras quatro cidades ucranianas, disse uma auto... [968 chars]",
        "url": "https://www.mixvale.com.br/2022/03/08/russia-vai-abrir-corredores/",
        "image": "https://www.mixvale.com.br/wp-content/uploads/Reuters_Direct_Media/BrazilOnlineReportWorldNews/tagreuters.com2022binary_LYNXMPEI2719R-BASEIMAGE.jpg",
        "publishedAt": "2022-03-08T22:16:48Z",
        "source": {
          "name": "Portal Mix Vale",
          "url": "https://www.mixvale.com.br"
        }
      },
      {
        "title": "Ouverture d'un CPE temporaire de 24 places à Gaspé dès mercredi",
        "description": "Le CPE temporaire autorisé par le ministère de la Famille pour Gaspé accueille ses premiers enfants ce mercredi. Dans un premier temps, le local aménagé",
        "content": "Le CPE temporaire autorisé par le ministère de la Famille pour Gaspé accueille ses premiers enfants ce mercredi.\nDans un premier temps, le local aménagé sur la rue Jacques-Cartier offrira 24 places sur les 45 autorisées par Québec suite à une demande... [647 chars]",
        "url": "https://www.radiogaspesie.ca/nouvelles/actualite/ouverture-dun-cpe-temporaire-de-24-places-a-gaspe-des-mercredi/",
        "image": "https://www.radiogaspesie.ca/wp-content/uploads/ecolier.jpg",
        "publishedAt": "2022-03-08T22:05:37Z",
        "source": {
          "name": "Radio Gaspésie C J R G - FM",
          "url": "https://www.radiogaspesie.ca"
        }
      },
      {
        "title": "Bodmin youth 'dealt with' after being caught carrying knife in shop",
        "description": "Local police tracked down the group",
        "content": "A youth has been \"dealt with\" by police, after it was discovered he had a knife on him during an incident at a shop in Cornwall.\nLocal police in Bodmin were alerted to a report about a group of children stealing from a shop, and threatening staff the... [1236 chars]",
        "url": "https://www.cornwalllive.com/news/cornwall-news/bodmin-youth-dealt-with-after-6773936",
        "image": "https://i2-prod.cornwalllive.com/news/cornwall-news/article887036.ece/ALTERNATES/s1200/0_Bodmin-town-centrePNG.png",
        "publishedAt": "2022-03-08T21:58:27Z",
        "source": {
          "name": "Cornwall Live",
          "url": "https://www.cornwalllive.com"
        }
      },
      {
        "title": "'Biggest dream' comes true for local veterinarian taking his skills to Survivor",
        "description": "Omar Zaheer, who has watched every season of the popular reality show, is getting his own chance to join the competition on the island",
        "content": "Omar Zaheer, who has watched every season of the popular reality show, is getting his own chance to join the competition on the island\nA veterinarian may be the perfect career for competing on Survivor, if you ask Newmarket animal doctor Omar Zaheer.... [4032 chars]",
        "url": "https://www.bradfordtoday.ca/local-news/biggest-dream-comes-true-for-local-veterinarian-taking-his-skills-to-survivor-5136619",
        "image": "https://www.vmcdn.ca/f/files/newmarkettoday/images/people/2022-03-07-omar-zaheer.JPG;w=1200;h=800;mode=crop",
        "publishedAt": "2022-03-08T21:30:00Z",
        "source": {
          "name": "BradfordToday",
          "url": "https://www.bradfordtoday.ca"
        }
      },
      {
        "title": "Governo de SP vai liberar uso de máscara em local aberto na quarta-feira",
        "description": "O Estado ainda estuda se esse aval valerá ou não para áreas livres de escolas",
        "content": "O governo de São Paulo decidiu liberar o uso de máscaras de proteção em ambientes abertos no Estado, mas ainda estuda se esse aval valerá ou não para áreas livres de escolas neste momento, segundo apurou a reportagem. A obrigatoriedade das máscaras d... [4424 chars]",
        "url": "https://valor.globo.com/brasil/noticia/2022/03/08/governo-de-sp-vai-liberar-uso-de-mascara-em-local-aberto-na-quarta-feira.ghtml",
        "image": "https://s2.glbimg.com/qw2YjcHw7H_Q7ubQSVqMZzh2t9Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/Y/H/GU2zU3SVWTSS8UuF6Qpw/130420covid-20198.jpg",
        "publishedAt": "2022-03-08T21:09:51Z",
        "source": {
          "name": "Valor Econômico",
          "url": "https://valor.globo.com"
        }
      },
      {
        "title": "Governo Russo anuncia novo cessar-fogo para evacuação de civis da Ucrânia",
        "description": "Os corredores humanitários vão valer a partir de 10 horas desta quarta-feira (9), no horário local ou 4 horas no horário de Brasília (DF)",
        "content": "Os corredores humanitários vão valer a partir de 10 horas desta quarta-feira (9), no horário local ou 4 horas no horário de Brasília (DF) edit\nApoie o 247\nICL\n247, com Reuters - A Rússia anunciou nesta terça-feira (8) que fará mais um período de trég... [2087 chars]",
        "url": "https://www.brasil247.com/mundo/governo-russo-anuncia-novo-cessar-fogo-para-evacuacao-de-civis-da-ucrania",
        "image": "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-brasil247/swp/jtjeq9/media/2022030818034_f38479d22acb13663b168d1ed83419103dd0f4c18ceb624644bf7117e3d19e29.jpg",
        "publishedAt": "2022-03-08T21:07:21Z",
        "source": {
          "name": "Brasil 247",
          "url": "https://www.brasil247.com"
        }
      },
      {
        "title": "'Home Town' stars back Mississippi city's tourism tax effort",
        "description": "The stars of HGTV’s “Home Town” appeared at the Mississippi Capitol with others from their community to support a possible increase in a local tourism tax.",
        "content": "Mississippi House Speaker Philip Gunn, R-Clinton, left, laughs as \"Home Town\" hosts Ben Napier and Erin Napier, thank lawmakers for a House resolution honoring their HGTV home remodeling show and their work at promoting tourism in their home town of ... [1892 chars]",
        "url": "https://www.clickondetroit.com/entertainment/2022/03/08/home-town-stars-back-mississippi-citys-tourism-tax-effort/",
        "image": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/EHJNID5RPNEJ7JDNSJV7QNQ4B4.jpg?_a=ATABlcW0",
        "publishedAt": "2022-03-08T20:40:33Z",
        "source": {
          "name": "WDIV ClickOnDetroit",
          "url": "https://www.clickondetroit.com"
        }
      },
      {
        "title": "Local woman earns $10,000 scholarship award",
        "description": "'Receiving this scholarship has significantly assisted in meeting school-related expenses, allowing me to live close to school to complete my studies'",
        "content": "'Receiving this scholarship has significantly assisted in meeting school-related expenses, allowing me to live close to school to complete my studies'\nA local Indigenous woman is among three Ontario students that have each received $10,000 as part of... [1526 chars]",
        "url": "https://www.baytoday.ca/more-local/local-woman-earns-10000-scholarship-award-5138497",
        "image": "https://www.vmcdn.ca/f/files/baytoday/images/people/20220303-brittney-pigeau.jpg;w=960;h=921;mode=crop",
        "publishedAt": "2022-03-08T20:30:00Z",
        "source": {
          "name": "BayToday",
          "url": "https://www.baytoday.ca"
        }
      }
    ]
  };

  constructor() {

  }

  GetAll(): Article {
    let article = new Article();
    let a = localStorage.getItem('article');
    Object.assign(article , JSON.parse(a ? a : ''));
    return article;
  }
}
