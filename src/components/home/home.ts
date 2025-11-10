import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  badge?: string;
  promo?: boolean;
  tag?: string;
};
type PriceFilterOption = { label: string; value: number };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly products: Product[] = [
    {
      name: 'Notebook Gamer Alienware 16 Area-51 ',
      subtitle: 'Intel® Core Ultra 9 275HX  · RTX 5070 · 32GB RAM',
      price: 12499,
      badge: 'Destaque da semana',
      category: 'Setup Gamer',
      image:
        'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa16250/spi/notebook-alienware-16-aa16250-area-51-blue-campaign-hero-504x350-ng.psd?fmt=png-alpha&wid=570&hei=400',
      features: ['Tela 16" QHD+ 240Hz', 'Teclado RGB por zona', 'Refrigeração avançada Cryo-Tech'],
      promo: true,
      tag: 'Frete grátis',
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

  protected readonly categoryFilterOptions: string[] = [
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
  protected readonly now = new Date();

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
