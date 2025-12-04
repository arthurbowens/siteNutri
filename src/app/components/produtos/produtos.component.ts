import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Produto, CategoriaProduto, Categoria } from '../../models/produto.model';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProdutoCardComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  categorias: Categoria[] = [];
  produtos: Produto[] = [];
  categoriaSelecionada: CategoriaProduto | 'todos' = 'todos';
  produtosFiltrados: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarCategorias();
    this.carregarProdutos();
  }

  carregarCategorias() {
    this.produtoService.obterCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  carregarProdutos() {
    this.produtoService.obterTodosProdutos().subscribe(produtos => {
      this.produtos = produtos;
      this.filtrarProdutos();
    });
  }

  selecionarCategoria(categoria: CategoriaProduto | 'todos') {
    this.categoriaSelecionada = categoria;
    this.filtrarProdutos();
  }

  filtrarProdutos() {
    if (this.categoriaSelecionada === 'todos') {
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter(
        p => p.categoria === this.categoriaSelecionada
      );
    }
  }
}
