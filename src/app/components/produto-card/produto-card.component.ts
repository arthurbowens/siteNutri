import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.model';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;

  constructor(private whatsappService: WhatsAppService) {}

  abrirWhatsApp() {
    const mensagem = `Olá! Tenho interesse no produto: ${this.produto.nome}\n` +
      `Preço: R$ ${this.produto.preco.toFixed(2)}\n` +
      `Gostaria de mais informações.`;
    this.whatsappService.abrirConversa(mensagem);
  }

  formatarPreco(preco: number): string {
    return preco.toFixed(2).replace('.', ',');
  }
}
