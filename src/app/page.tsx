'use client'
import { Banner } from '@/components/Banner'
import { Flex, Heading, Link, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import home2 from '../assets/home-2.webp';
import wave from '../assets/wave.svg';
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
import Image from 'next/image';
import { FaCheckDouble } from 'react-icons/fa'
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
export default function Home() {
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
          px="10rem"
          justify="center"
        >
          <Flex
            w="100%"
            align="center"
          >
            <Flex
              w="50%"
              flexDirection="column"
              gap="0.5rem"
            >
              <Heading
                fontSize="2.5rem"
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
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
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
          px="80px"
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
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
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
            px="80px"
            align="center"
            justify="center"
          >
            <Image 
              src={medicos}
              alt="Medicos"
              style={{
                width: '550px',
                height: '340px'
              }}
            />
            <Flex
              flexDir="column"
              gap="24px"
              width="530px"
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
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            QUERO MELHORAR MINHA SAÚDE!
          </Button>
        </Flex>

        <Flex
          w="100%"
          backgroundColor="#249004"
          p="80px"
          flexDirection="column"
          align="center"
        >
          <Heading
            color="#FFF"
          >
            Não espere mais para se livrar das dores articulares.
          </Heading>
          <Text
            fontSize="18px"
            color="#FFF"
          >
            Aproveite esta oferta especial e adquira o VITA-PRO-NÓBIS hoje mesmo!
          </Text>

          <SimpleGrid
            w="100%"
            minChildWidth="550px"
            gap="24px"
          >
            <Link
              href="https://ev.braip.com/ref?pl=plako20z&ck=cheq76nd&af=afinejxjp3"
              target="_blank"
            >
              <Image 
                src={umFrasco}
                alt="1 Frascos"
                style={{
                  maxWidth: '550px',
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
                  maxWidth: '550px',
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
                  maxWidth: '550px',
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
                  maxWidth: '550px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              />
            </Link>
          </SimpleGrid>
        </Flex>

    </Flex>
  )
}