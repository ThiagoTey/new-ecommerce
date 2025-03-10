"use client";
import sanitizeHtml from "sanitize-html";

const hyperTextMock = `
  <h2>Produto Incrível - Edição Limitada</h2>
  <p>Este é um <strong>produto exclusivo</strong> com qualidade excepcional. Perfeito para quem busca <em>durabilidade</em> e <em>design moderno</em>.</p>
  
  <ul>
    <li>✅ Material resistente e leve</li>
    <li>✅ Design sofisticado e ergonômico</li>
    <li>✅ Disponível em diversas cores</li>
  </ul>
  
  <p>
    <a href="https://exemplo.com/produto" target="_blank">Clique aqui</a> para mais detalhes e avaliações de clientes.
  </p>
  
  <p><strong>Oferta especial:</strong> Compre agora e ganhe <span style="color: red;">10% de desconto</span> na primeira compra!</p>
  
  <img src="/placeholder.png" alt="Imagem do Produto" style="width:100%; max-width:400px; margin-top:10px;">`;

const ProductDescription = () => {

    const sanitizedHTML = sanitizeHtml(hyperTextMock, {
        allowedTags: [
          "div", "h2", "p", "ul", "li", "strong", "em", "a", "span", "img",
        ],
        allowedAttributes: {
          a: ["href", "target"],
          img: ["src", "alt", "style"],
          span: ["style"],
        },
        allowedSchemes: ["http", "https"],
      });

  return <section className="product-description" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default ProductDescription;
