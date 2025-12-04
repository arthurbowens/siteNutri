import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto, Categoria } from '../models/produto.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    // Suplementos
    {
      id: '1',
      nome: 'Whey Protein',
      descricao: 'Proteína isolada de alta qualidade para ganho de massa muscular',
      preco: 149.90,
      imagem: 'https://images.unsplash.com/photo-1593095948071-474c5cc298a0?w=400',
      categoria: CategoriaProduto.SUPLEMENTOS,
      disponivel: true
    },
    {
      id: '2',
      nome: 'Creatina Monohidratada',
      descricao: 'Aumenta força e potência durante os treinos',
      preco: 79.90,
      imagem: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      categoria: CategoriaProduto.SUPLEMENTOS,
      disponivel: true
    },
    {
      id: '3',
      nome: 'BCAA',
      descricao: 'Aminoácidos essenciais para recuperação muscular',
      preco: 89.90,
      imagem: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      categoria: CategoriaProduto.SUPLEMENTOS,
      disponivel: true
    },
    {
      id: '4',
      nome: 'Multivitamínico',
      descricao: 'Completo complexo vitamínico para saúde geral',
      preco: 59.90,
      imagem: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      categoria: CategoriaProduto.SUPLEMENTOS,
      disponivel: true
    },
    // Dietas Enterais
    {
      id: '5',
      nome: 'Dieta Enteral Standard',
      descricao: 'Nutrição completa para pacientes com dificuldade de deglutição',
      preco: 45.00,
      imagem: 'https://images.unsplash.com/photo-1556910103-2c727e05c5a3?w=400',
      categoria: CategoriaProduto.DIETAS_ENTERAIS,
      disponivel: true
    },
    {
      id: '6',
      nome: 'Dieta Enteral Hiperproteica',
      descricao: 'Alta concentração de proteínas para recuperação',
      preco: 52.00,
      imagem: 'https://images.unsplash.com/photo-1556910103-2c727e05c5a3?w=400',
      categoria: CategoriaProduto.DIETAS_ENTERAIS,
      disponivel: true
    },
    {
      id: '7',
      nome: 'Dieta Enteral Diabética',
      descricao: 'Fórmula especial para controle glicêmico',
      preco: 48.00,
      imagem: 'https://images.unsplash.com/photo-1556910103-2c727e05c5a3?w=400',
      categoria: CategoriaProduto.DIETAS_ENTERAIS,
      disponivel: true
    },
    // Moda Fitness
    {
      id: '8',
      nome: 'Top Esportivo',
      descricao: 'Conforto e sustentação para seus treinos',
      preco: 89.90,
      imagem: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      categoria: CategoriaProduto.MODA_FITNESS,
      disponivel: true
    },
    {
      id: '9',
      nome: 'Legging Fitness',
      descricao: 'Alta compressão e tecnologia dry-fit',
      preco: 129.90,
      imagem: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400',
      categoria: CategoriaProduto.MODA_FITNESS,
      disponivel: true
    },
    {
      id: '10',
      nome: 'Tênis Esportivo',
      descricao: 'Amortecimento e estabilidade para corrida e treino',
      preco: 299.90,
      imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      categoria: CategoriaProduto.MODA_FITNESS,
      disponivel: true
    },
    {
      id: '11',
      nome: 'Shorts Fitness',
      descricao: 'Tecido respirável e secagem rápida',
      preco: 79.90,
      imagem: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400',
      categoria: CategoriaProduto.MODA_FITNESS,
      disponivel: true
    }
  ];

  private categorias: Categoria[] = [
    {
      id: CategoriaProduto.SUPLEMENTOS,
      nome: 'Suplementos',
      descricao: 'Proteínas, vitaminas e suplementos para performance',
      icone: '💊'
    },
    {
      id: CategoriaProduto.DIETAS_ENTERAIS,
      nome: 'Dietas Enterais',
      descricao: 'Nutrição completa para pacientes especiais',
      icone: '🥤'
    },
    {
      id: CategoriaProduto.MODA_FITNESS,
      nome: 'Moda Fitness',
      descricao: 'Roupas e acessórios para seus treinos',
      icone: '👕'
    }
  ];

  obterTodosProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  obterProdutosPorCategoria(categoria: CategoriaProduto): Observable<Produto[]> {
    return of(this.produtos.filter(p => p.categoria === categoria));
  }

  obterProdutoPorId(id: string): Observable<Produto | undefined> {
    return of(this.produtos.find(p => p.id === id));
  }

  obterCategorias(): Observable<Categoria[]> {
    return of(this.categorias);
  }

  obterCategoriaPorId(id: CategoriaProduto): Observable<Categoria | undefined> {
    return of(this.categorias.find(c => c.id === id));
  }
}

