import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuAberto = false;

  constructor(private whatsappService: WhatsAppService) {}

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  scrollParaSecao(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
      this.fecharMenu();
    }
  }

  abrirWhatsApp(mensagem: string = '') {
    this.whatsappService.abrirConversa(mensagem);
  }
}
