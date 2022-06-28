import { useState } from "react";
import { Link } from "react-router-dom";
import imageAllBeers from "../../assets/beers.png";
import imageRandomBeer from "../../assets/random-beer.png";
import imageNewBeer from "../../assets/new-beer.png";

export function HomePage() {
  return (
    <div>
      <div>
        <Link to="/beers">
          <div className="container">
            <div className="text-dark">
              <img src={imageAllBeers} alt={imageAllBeers} />
              <h1>all Beers</h1>
              <p>
                A cerveja (do gaulês, através do latim servisia) é uma bebida
                produzida a partir da fermentação de cereais, principalmente a
                cevada maltada. Acredita-se que tenha sido uma das primeiras
                bebidas alcoólicas que foram criadas pelo ser humano.
                Atualmente, é a terceira bebida mais popular do mundo, logo
                depois da água e do café. É a bebida alcoólica mais consumida no
                mundo atualmente.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/randomBeer">
          <div className="container mb-0 text-dark">
            <img src={imageRandomBeer} alt={imageRandomBeer} />
            <h1>Random Beer</h1>
            <p>
              Pilsen: A cerveja Pilsen é uma das primeiras que a maioria das
              pessoas experimenta. Os dois principais subestilos encontrados são
              a German Pilsen, mais amarga, e a Bohemian Pilsen, mais maltada e
              encorpada. A cerveja Bock é o estilo clássico alemão e sua
              concentração de malte é uma característica que chama atenção. As
              Bocks tradicionais apresentam cor marrom e notas tostadas que
              lembram nozes, castanhas e frutas secas, com delicado dulçor no
              paladar. Existem variações claras, com trigo e mais alcoólicas que
              as tradicionais. Witbier Estilo de cerveja de trigo de origem
              belga, caracterizada pela adição de cascas de laranja e sementes
              de coentro. Por ser leve, cítrica e refrescante, é considerada uma
              boa porta de entrada para as cervejas artesanais. Weissbier
              Tradicional cerveja de trigo alemã, também conhecida como
              Hefeweissbier, é refermentada na garrafa, com aparência turva e
              notas de casca de pão, cravo e banana. No paladar, é muito macia e
              cremosa com amargor muito abaixo ou até imperceptível, o que a
              torna ideal para muitos consumidores que não gostam das cervejas
              mais lupuladas. American IPA Estilo querinho dos fanáticos por
              lúpulo, as American IPA’s apresentam notas de frutas tropicais,
              pinho, toques florais vindas das variedades de lúpulos utilizadas.
              Na boca, o amargor vai de médio a alto com final prolongado e
              refrescante. Juicy / Hazy IPA Esse novo estilo de IPA já é um
              sucesso absoluto! Popularmente conhecido como New England IPA.
              surgiu em Vermont, nos EUA, e apresenta aparecência turva, indo do
              amarelo palha ao alaranjado. Apresentam notas muito intensas de
              frutas tropicais e cítricas, textura aveludada, com amargor
              moderado e curto no final do gole. Stout Cervejas de alta
              fermentação e com bastante malte torrado. De coloração escura,
              suas principais notas vêm da adição de maltes torrados, que
              remetem a café e cholate amargo. A lista de estilos de cerveja não
              para por aqui. Dá para passear entre sabores e aromas cervejeiros
              de forma deliciosa e rica por muito tempo sem repetir. E vamos
              combinar: entendendo cada um dos tipos de cerveja, fica ainda mais
              gostoso apreciá-las, não é mesmo? Inclusive para escolher o
              acompanhamento perfeito que vai aguçar seus sabores. Você se
              preocupa com a harmonização entre a cerveja e o acompanhamento, ou
              tem um tira-gosto preferido do qual não abre mão? Deixe sua dica
              nos comentários e aproveite para ver outras sugestões!
            </p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/newBeer">
          <div className="container mb-0 text-dark">
            <img src={imageNewBeer} alt={imageNewBeer} />
            <h1>New Beer</h1>
            <p>
              O Brasil é o terceiro maior produtor e um dos grandes consumidores
              de cerveja do mundo. São fabricados 13,8 bilhões de litros por
              ano, o que coloca o país no ranking global atrás apenas da China e
              dos Estados Unidos. Na última década, o consumo aumentou a uma
              taxa média de 5% ao ano, com destaque para o segmento de cervejas
              artesanais, que teve uma evolução anual em torno de 20%. Com um
              mercado tão robusto, várias iniciativas inovadoras são fomentadas
              nas universidades, cervejarias, institutos de pesquisa e por
              agricultores. Unidos em um esforço conjunto para melhorar a
              qualidade do produto e reduzir os custos de fabricação, eles são
              responsáveis por um leque de inovações relacionadas tanto ao
              processo produtivo quanto ao cultivo no país dos principais
              ingredientes da bebida, além da água: cevada, lúpulo e levedura.
              “A indústria cervejeira brasileira é formada por mais de 50
              complexos fabris com tecnologia de padrão mundial”, diz Paulo
              Petroni, diretor-executivo da Associação Brasileira da Indústria
              da Cerveja (CervBrasil), entidade que reúne os maiores fabricantes
              do país.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

/*
   <div>
            
            <div>
                <img src={} alt ={}/>
                <h1>Random Beer</h1>
                <p>text</p> 
            </div>
            <div>
                <img src={} alt ={}/>
                <h1>New Beer</h1>
                <p>text</p> 
             </div>
        </div>
*/
