'use client'
import { Banner } from '@/components/Banner'
import { Flex, Heading, Icon, Link, List, ListIcon, ListItem, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import home2 from '../assets/home-2.webp';
import atrite from '../assets/artrite.webp';
import gota from '../assets/gota.webp';
import dorCosta from '../assets/dor-costa.webp';
import inchacho from '../assets/inchaco.webp';
import bursite from '../assets/bursite.webp';
import tendinite from '../assets/tendinite.webp';
import medicos from '../assets/medicos.webp';
import umFrasco from '../assets/1frasco.webp';
import doisFrasco from '../assets/2frasco.webp';
import tresFrasco from '../assets/3frasco.webp';
import dozeFrasco from '../assets/12frasco.webp';
import pagamento from '../assets/pagamento-new.png.webp';
import garantia from '../assets/garantia.webp';
import anvisa from '../assets/anvisa.webp';
import Image from 'next/image';
import { FaCheckCircle, FaCheckDouble } from 'react-icons/fa'
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { useRef } from 'react';
export default function Home() {
  const [isLargeThan1280px] = useMediaQuery('(min-width: 1280px)');
  const buyRef = useRef(null);
  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
    >
        <Banner />
        <Flex
          w="100%"
          flexDirection="column"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          justify="center"
        >
          <Flex
            w="100%"
            align="center"
            flexDir={isLargeThan1280px ? "row" : "column"}
          >
            <Flex
              w={isLargeThan1280px ? "50%" : "100%"}
              flexDirection="column"
              gap="0.5rem"
            >
              <Heading
                fontSize={["1.5rem", "2rem", "2.5rem"]}
                color="#114B00"
              >
                Ora-Pro-Nóbis é a descoberta do ano na luta contra inflamações articulares
              </Heading>
              <Text
                fontSize="1.2rem"
                lineHeight="1.3em"
              >
                O suplemento mais eficaz do mundo extraído da planta ancestral <b>"Ora Pro Nóbis"</b> tem feito sucesso em todo o Brasil e pode aliviar até os casos mais avançados em poucos dias.
              </Text>
              <List>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  Maior concentração de <b>Ora-Pro-Nóbis</b> do Brasil
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  <b>12</b> Componentes em <b>1</b> Produto.
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  Alívio instantâneo de qualquer dor
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  Coloque um fim na dormência
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  Fortalecimento ósseo e muscular
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  Anti-inflamatório, Antimicrobiano, Antioxidante e Antibacteriano
                </ListItem>
                <ListItem fontSize="1.2rem">
                  <ListIcon as={FaCheckDouble} color="#114B00" />
                  100% natural e extremamente poderoso
                </ListItem>
              </List>
              <Button
                maxW="300px"
                //@ts-ignore
                onClick={() => buyRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                QUERO EXPERIMENTAR
              </Button>
            </Flex>
            <Image 
              width={550} 
              height={550} 
              src={home2} 
              alt="Frasco de remédio"
            />
          </Flex>

          <Heading
            w="100%"
            color="red"
            textAlign="center"
          >
            ULTIMAS UNIDADES!
          </Heading>
        </Flex>
        <Flex
          w="100%"
          backgroundColor="#114B00"
          position="relative"
          align="center"
          flexDirection="column"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          py="20px"
          gap="20px"
        >
            <Heading
              color="#FFF"
              fontSize="30px"
            >
              Veja os problemas que o Vita-Pro-Nóbis trata nos primeiros dias:
            </Heading>
            <SimpleGrid
              w="100%"
              minChildWidth="365px"
              gap="20px"
            >
              <Card 
                image={atrite}
                title="Artrite Reumatoide"
                description="Alivie a dor e o desconforto nas articulações por meio de métodos eficientes para restaurar sua mobilidade."
              />

              <Card 
                image={inchacho}
                title="Artrose"
                description="Recupere a sua qualidade de vida aliviando as dores nas articulações e restabelecendo o conforto nos movimentos."
              />

              <Card 
                image={tendinite}
                title="Tendinite"
                description="Mude seu dia a dia, suavizando as dores nas articulações e vivendo cada instante sem limitações."
              />

              <Card 
                image={bursite}
                title="Bursite"
                description="Finalmente diga adeus a dor e ao incômodo nas articulações, e reassuma suas atividades cotidianas com segurança."
              />

              <Card 
                image={gota}
                title="Gota"
                description="Alcance uma vida livre de dores intensas nas articulações e desfrute de cada movimento com conforto e tranquilidade."
              />

              <Card 
                image={dorCosta}
                title="Dor nas Costas"
                description="Elimine as dores nas costas, como a hérnia de disco, e viva com maior conforto e flexibilidade."
              />
            </SimpleGrid>
            <Button
              variant='secondary'
              maxW="250px"
              //@ts-ignore
              onClick={() => buyRef?.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO ALÍVIO JÁ!
            </Button>
        </Flex>

        <Flex
          w="100%"
          align="center"
          flexDir="column"
        >
          <Heading
            marginTop="80px"
          >
            Descubra o segredo Vita-Pro-Nóbis!
          </Heading>
          <Flex
            w="100%"
            gap="24px"
            px={isLargeThan1280px ? "10rem" : "1.2rem"}
            align="center"
            justify="center"
            flexDir={isLargeThan1280px ? "row" : "column"}
          >
            <Image 
              src={medicos}
              alt="Medicos"
              style={{
                width: isLargeThan1280px ? '550px' : '340px',
                height: '340px'
              }}
            />
            <Flex
              flexDir="column"
              gap="24px"
              width={isLargeThan1280px ? "530px" : "100%"}
              py="20px"
            >
              <Text
                fontSize="22px"
              >
                Criado por cientistas premiados dos Estados Unidos, o Vita-Pro-Nóbis é um suplemento inovador para POR UM FIM as dores articulares. Sua fórmula exclusiva e IMPORTADA fornece um escudo vital para as articulações, entregando os nutrientes fundamentais para iniciar o processo natural de regeneração. Com o Vita-Pro-Nóbis, retome a mobilidade e viva livre das dores nas articulações.
              </Text>
              <Text
                fontSize="22px"
              >
                Além disso, esse suplemento atua na prevenção de problemas como desconforto e edema e inchaço nas articulações, protegendo-as de fatores ambientais adversos. O Vita-Pro-Nóbis surge como uma solução distinta, restaurando a função das articulações de forma rápida e supreendente , tudo sem a necessidade de procedimentos cirúrgicos. Dê uma chance ao Vita-Pro-Nóbis e renove sua qualidade de vida.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="100%"
          backgroundColor="#FFFCBF"
          p="80px"
          flexDirection="column"
          align="center"
        >
          <Heading
            color="#114B00"
          >
            Se você não quer depender de cirurgia, o Vita-Pro-Nóbis é para você
          </Heading>
          <Button
            //@ts-ignore
            onClick={() => buyRef?.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO MELHORAR MINHA SAÚDE!
          </Button>
        </Flex>
        <Flex 
          p="80px"
          flexDir={isLargeThan1280px ? "row" : "column"}
          gap={30}
          align="center"
        >
          <Flex
            maxW={800}
            w="100%"
            flexDir="column"
          >
            <Heading as="h2" size="lg" mb={4}>
              O <strong>VITA-PRO-NÓBIS</strong> segue os padrões mais rigorosos da indústria, e tendo autorização da ANVISA para ser comercializado por todo o país.
            </Heading>
            <List spacing={2} mb={4}>
              <ListItem>
                <Icon as={FaCheckCircle} color="green.500" mr={2} />
                Acabe com a dor na cartilagem
              </ListItem>
              <ListItem>
                <Icon as={FaCheckCircle} color="green.500" mr={2} />
                Não permita que seus ombros, braços, coluna ou quadril fiquem travados
              </ListItem>
              <ListItem>
                <Icon as={FaCheckCircle} color="green.500" mr={2} />
                Não deixe de trabalhar por conta da dor intensa
              </ListItem>
              <ListItem>
                <Icon as={FaCheckCircle} color="green.500" mr={2} />
                Abandone remédios que podem causar dependência ou efeitos colaterais irreversíveis
              </ListItem>
            </List>
            <Button
              maxWidth={380}
              //@ts-ignore
              onClick={() => buyRef?.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO ESTAR 100% SEGURO!
            </Button>
          </Flex>
          <Image 
              width={isLargeThan1280px ? 500 : 350}
              src={anvisa}
              alt="Anvisa aprova!"
            />
        </Flex>
        <Flex
          w="100%"
          backgroundColor="#249004"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          flexDirection="column"
          align="center"
          py={"1.2rem"}
          ref={buyRef}
        >
          <Heading
            color="#FFF"
          >
            Não espere mais para se livrar das dores articulares.
          </Heading>
          <Text
            fontSize="18px"
            color="#FFF"
            marginTop="20px"
          >
            Aproveite esta oferta especial e adquira o VITA-PRO-NÓBIS hoje mesmo!
          </Text>

          <SimpleGrid
            w="100%"
            minChildWidth={isLargeThan1280px ? "550px" : "350px"}
            gap="24px"
            marginTop="20px"
          >
            <Link
              href="https://ev.braip.com/ref?pl=plako20z&ck=cheq76nd&af=afinejxjp3"
              target="_blank"
            >
              <Image 
                src={umFrasco}
                alt="1 Frascos"
                style={{
                  maxWidth: isLargeThan1280px ? '550px' : '350px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              />
            </Link>
            <Link
              href="https://ev.braip.com/ref?pl=plag1o08&ck=cheq76nd&af=afinejxjp3"
              target="_blank"
            >
              <Image 
                src={doisFrasco}
                alt="2 Frascos"
                style={{
                  maxWidth: isLargeThan1280px ? '550px' : '350px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              />
            </Link>
            <Link
              href="https://ev.braip.com/ref?pl=pla2nwln&ck=cheq76nd&af=afinejxjp3"
              target="_blank"
            >
              <Image 
                src={tresFrasco}
                alt="3 Frascos"
                style={{
                  maxWidth: isLargeThan1280px ? '550px' : '350px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              />
            </Link>
            <Link
              href="https://ev.braip.com/ref?pl=plaxwv6v&ck=cheq76nd&af=afinejxjp3"
              target="_blank"
            >
              <Image 
                src={dozeFrasco}
                alt="12 Frascos"
                style={{
                  maxWidth: isLargeThan1280px ? '550px' : '350px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              />
            </Link>
          </SimpleGrid>
        </Flex>
        <Flex
          w="100%"
          backgroundColor="#E4FFE3"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          py="1rem"
          flexDirection={isLargeThan1280px ? "row" : "column"}
          gap={isLargeThan1280px ? "10rem" : "3rem"}
          align="center"
          justify="center"
        >
          <Flex
            maxW={405}
            flexDir="column"
          >
            <Heading>Resultdos garantidos  ou seu dinheiro de volta!</Heading>
            <Text>Estamos tão confiantes na eficácia do <b>VITA-PRO-NÓBIS</b> que oferecemos uma garantia de 90 dias.</Text>
            <Text>Se você não ficar satisfeito com os resultados, nós reembolsaremos o valor integral da sua compra.</Text>
            <Button
              //@ts-ignore
              onClick={() => buyRef?.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO VITA-PRO-NÓBIS
            </Button>
          </Flex>
          <Image 
            width={405}
            src={garantia}
            alt="garantia"
          />
        </Flex>
        <Flex
          w="100%"
          backgroundColor="#249004"
          align="center"
          flexDirection="column"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          py="20px"
          gap="20px"
        >
          <Heading color="white">DÚVIDAS?</Heading>
          <Flex
            w="100%"
            gap="10px"
            flexDirection={isLargeThan1280px ? "row" : "column"}
          >
            <Accordion 
              allowToggle 
              w="100%" 
              backgroundColor="white"
              borderRadius=".4rem"
            >
              <AccordionItem
                borderRadius=".4rem"
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  O que é VITA-PRO-NÓBIS ?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  VITA-PRO-NÓBIS é um suplemento alimentar formulado para aliviar dores articulares e melhorar a saúde das articulações
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderRadius=".4rem"
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  Como VITA-PRO-NÓBIS funciona?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Resposta: VITA-PRO-NÓBIS age reduzindo a inflamação, fortalecendo os ossos e proporcionando alívio das dores articulares.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderRadius=".4rem"
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  Existem efeitos colaterais?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  VITA-PRO-NÓBIS é seguro, pois sua fórmula é baseada em ingredientes naturais. Consulte um profissional de saúde antes de iniciar qualquer suplemento.
                </AccordionPanel>
              </AccordionItem>
              
            </Accordion>

            <Accordion 
              allowToggle 
              w="100%" 
              backgroundColor="white"
              borderRadius=".4rem"
            >
              <AccordionItem
                borderRadius=".4rem"
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  Quanto tempo leva para ver resultados?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Muitos clientes relatam alívio em questão de poucos dias, mas os resultados podem variar.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderRadius=".4rem"
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  Qual é a dose recomendada?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Recomendamos tomar 15 gotas de VITA-PRO-NÓBIS por dia, de preferência com as refeições.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderRadius=".4rem"  
              >
                <AccordionButton
                  color="#249004"
                  fontWeight={600}
                >
                  Posso tomar VITA-PRO-NÓBIS com outros suplementos?
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Consulte um profissional de saúde para garantir que a combinação de suplementos seja segura e eficaz para você.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          backgroundColor="#FFF"
          px={isLargeThan1280px ? "10rem" : "1.2rem"}
          py="1rem"
          flexDirection={isLargeThan1280px ? "row" : "column"}
          gap="3rem"
          align="center"
          justify="center"
        >
          <Flex
            direction="column"
            gap="1rem"
          >
            <Heading fontSize={[".8rem","1rem","1.5rem"]}>Rastreio</Heading>
            <Button
              onClick={() => window.open("https://www.linkcorreios.com.br/")}
            >
              RASTREIE AQUI
            </Button>
          </Flex>
          <Flex
            direction="column"
            gap="1rem"
          >
            <Heading fontSize={[".8rem","1rem","1.5rem"]}>Links Importantes</Heading>
            <Link
              href='https://vitapronobis.site/politicas-de-privacidade/'
              target='_blank'
            >
              Política de Privacidade
            </Link>
            <Link
              href='https://vitapronobis.site/termo-de-uso'
              target='_blank'
            >
              Termos de Uso
            </Link>
          </Flex>
          <Flex
            direction="column"
            gap="1rem"
          >
            <Heading fontSize={[".8rem","1rem","1.5rem"]}>Formas de pagamento</Heading>
            <Image 
              src={pagamento}
              alt="Formas de pagamento"
              width={250} 
            />
          </Flex>
        </Flex>

    </Flex>
  )
}