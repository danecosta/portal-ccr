import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./pages/emergencia/emergencia.module').then(m => m.EmergenciaPageModule)
  },
  {
    path: 'postos-combustivel',
    loadChildren: () => import('./pages/postos-combustivel/postos-combustivel.module').then(m => m.PostosCombustivelPageModule)
  },
  {
    path: 'saude-bem-estar',
    loadChildren: () => import('./pages/saude-bem-estar/saude-bem-estar.module').then(m => m.SaudeBemEstarPageModule)
  },
  {
    path: 'paradas',
    loadChildren: () => import('./pages/paradas/paradas.module').then(m => m.ParadasPageModule)
  },
  {
    path: 'rotas',
    loadChildren: () => import('./pages/rotas/rotas.module').then(m => m.RotasPageModule)
  },
  {
    path: 'postos-ccr',
    loadChildren: () => import('./pages/postos-ccr/postos-ccr.module').then(m => m.PostosCcrPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'comunicados',
    loadChildren: () => import('./pages/comunicados/comunicados.module').then(m => m.ComunicadosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'cashback',
    loadChildren: () => import('./pages/cashback/cashback.module').then(m => m.CashbackPageModule)
  },
  {
    path: 'bem-vindo',
    loadChildren: () => import('./pages/bem-vindo/bem-vindo.module').then(m => m.BemVindoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'prontuario',
    loadChildren: () => import('./pages/prontuario/prontuario.module').then(m => m.ProntuarioPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
