import Image from "next/image";
import Logo from "../ui/Logo";
import Container from "./Container";
import CustomLink from "../ui/CustomLink";

const DetailContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="gap-y-7 flex flex-col">{children}</div>;
};


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <Container className="mt-28 w-full py-8 grid grid-cols-2 md:grid-cols-4 gap-20">
        {/* Primeiro a esquerda */}
        <DetailContainer>
          <Logo />
          <p>
            Transforme seu estilo com qualidade e conforto. Encontre as melhores
            opções de moda para todas as ocasiões, com entrega rápida e segura.
          </p>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={20} height={20} />
            <Image src="/instagram.png" alt="" width={20} height={20} />
            <Image src="/youtube.png" alt="" width={20} height={20} />
            <Image src="/pinterest.png" alt="" width={20} height={20} />
            <Image src="/x.png" alt="" width={20} height={20} />
          </div>
        </DetailContainer>

        {/* Segundo */}
        <DetailContainer>
          <h4 className="tracking-wider font-medium text-xl">Empresa</h4>
          <CustomLink href="/">Sobre</CustomLink>
          <CustomLink href="/">Recursos</CustomLink>
          <CustomLink href="/">Trabalho</CustomLink>
        </DetailContainer>

        {/* Terceiro */}
        <DetailContainer>
          <h4 className="tracking-wider font-medium text-xl">Ajuda</h4>
          <CustomLink href="/">Suporte</CustomLink>
          <CustomLink href="/">Contato</CustomLink>
          <CustomLink href="/">Termos & Condições</CustomLink>
        </DetailContainer>

        {/* Quarto */}
        <DetailContainer>
          <h4 className="tracking-wider font-medium text-xl">
            Perguntas Frequentes
          </h4>
          <CustomLink href="/">Pedidos</CustomLink>
          <CustomLink href="/">Pagamentos</CustomLink>
        </DetailContainer>
      </Container>
    </footer>
  );
};

export default Footer;
