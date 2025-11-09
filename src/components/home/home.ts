import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Stat = { value: string; label: string };
type Category = { title: string; description: string; highlight: string };
type Product = {
  name: string;
  subtitle: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  promo?: boolean;
  features: string[];
};
type Testimonial = { name: string; role: string; quote: string };
type PriceFilterOption = { label: string; value: number };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected heroStats: Stat[] = [
    { value: '25k+', label: 'Clientes satisfeitos' },
    { value: '1.200+', label: 'Produtos ativos' },
    { value: '98%', label: 'Entregas no prazo' },
  ];

  protected categories: Category[] = [
    {
      title: 'Smartphones e Wearables',
      description: 'Dispositivos móveis e acessórios para comunicação, saúde e fitness.',
      highlight: 'Garanta upgrades anuais com o Clube TechPrime.',
    },
    {
      title: 'Setup Gamer',
      description: 'PCs, monitores e periféricos para jogos de alta performance.',
      highlight: 'Ofertas com RTX série 40 e monitores 240Hz.',
    },
    {
      title: 'Casa Conectada',
      description: 'Dispositivos inteligentes para automação residencial e segurança.',
      highlight: 'Instalação guiada em todo o Brasil.',
    },
  ];

  protected products: Product[] = [
    {
      name: 'Notebook Gamer Alienware 16 Area-51 ',
      subtitle: 'Intel® Core Ultra 9 275HX  · RTX 5070 · 32GB RAM',
      price: 12499,
      badge: 'Destaque da semana',
      category: 'Setup Gamer',
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa16250/spi/notebook-alienware-16-aa16250-area-51-blue-campaign-hero-504x350-ng.psd?fmt=png-alpha&wid=570&hei=400',
      features: ['Tela 16" QHD+ 240Hz', 'Teclado RGB por zona', 'Refrigeração avançada Cryo-Tech'],
    },
    {
      name: 'Airpods Max',
      subtitle: 'Áudio espacial · Cancelamento ativo de ruído',
      price: 3499,
      promo: true,
      category: 'Wearables',
      image: 'https://cdn.awsli.com.br/600x1000/2557/2557636/produto/257216364/airpods-max-select-spacegray-202011-xhlyvosroq.jpg',
      features: ['Driver dinâmico de alta fidelidade', 'Equalização adaptativa', 'Áudio computacional'],
    },
    {
      name: 'Macbook pro 14" M4"',
      subtitle: 'Chip M4 Pro · 16GB RAM · 1TB SSD',
      price: 18999,
      category: 'Produtividade',
      image: 'https://www.apple.com/newsroom/images/2024/10/new-macbook-pro/article/Apple-MacBook-Pro-M4-lineup_big.jpg.large.jpg',
      features: ['Tela Liquid Retina XDR', 'Suporte a ProRes', 'Autonomia de até 22 horas'],
    },
    {
      name: 'Playstation 5',
      subtitle: 'Console · Controle DualSense · VRR',
      price: 4299,
      badge: 'Mais vendido',
      category: 'Setup Gamer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGY_JfHAFnj9BYFg16FQeX8zsJPqc-EsiVA&s',
      features: ['SSD NVMe 825GB', 'Ray Tracing', 'Suporte a 8K'],
    },
    {
      name: 'Alexa Echo Show 15',
      subtitle: 'Tela HD 15" · Smart Home Hub · Videochamadas',
      price: 1299,
      promo: true,
      category: 'Casa Conectada',
      image: 'https://tm.ibxk.com.br/2022/05/10/10143911865297.jpg',
      features: ['Integração com dispositivos Matter', 'Perfis personalizados por voz', 'Suporte a videochamadas em grupo'],
    },
    {
      name: 'Iphone 17 Pro Max',
      subtitle: 'Chip A18 Bionic · Câmera Quádrupla · Tela ProMotion',
      price: 9999,
      category: 'Smartphones',
      image: 'https://www.apple.com/br/iphone-17-pro/images/overview/highlights/highlights_design_endframe__flnga0hibmeu_large.jpg',
      features: ['Captura 10-bit 4:2:2', 'Softbox magnético', 'Mesa de corte USB-C'],
    },
  ];

  protected readonly categoryFilterOptions = [
    'Todos',
    ...Array.from(new Set(this.products.map((product) => product.category))),
  ];

  protected readonly priceFilterOptions: PriceFilterOption[] = [
    { label: 'Até R$ 2.000', value: 2000 },
    { label: 'Até R$ 5.000', value: 5000 },
    { label: 'Até R$ 10.000', value: 10000 },
  ];

  protected selectedCategory = 'Todos';
  protected selectedPrice: number | null = null;
  protected readonly promoHighlightValue = 2500;

  protected testimonials: Testimonial[] = [
    {
      name: 'Beatriz Costa',
      role: 'CEO · Startup NexaTech',
      quote:
        'Nosso escritório foi equipado com dispositivos de ponta em tempo recorde. A consultoria técnica foi essencial para otimizar custos e performance.',
    },
    {
      name: 'Hugo Martins',
      role: 'Streamer · Arena Nebula',
      quote:
        'Com o setup gamer recomendado, meu desempenho em competições melhorou significativamente. A latência zero dos periféricos faz toda a diferença.',
    },
    {
      name: 'Larissa Prado',
      role: 'Head de Operações · Colégio Orion',
      quote:
        'Com os Macbooks fornecidos, nossos alunos têm acesso às melhores ferramentas educacionais. A integração com o ecossistema Apple facilitou a gestão dos dispositivos.',
    },
  ];

  protected resetFilters(): void {
    this.selectedCategory = 'Todos';
    this.selectedPrice = null;
  }

  protected get filteredProducts(): Product[] {
    return this.products.filter((product) => {
      const matchCategory = this.selectedCategory === 'Todos' || product.category === this.selectedCategory;
      const matchPrice = this.selectedPrice === null || product.price <= this.selectedPrice;
      return matchCategory && matchPrice;
    });
  }
}
