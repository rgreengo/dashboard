import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { AlcadaService } from '../../services/alcada.service';
import { Alcada } from '../../models/alcada.model';
//import { Panels } from 'src/app/shared/components/panels/models/panels.model';
//import { MENSAGEM_ERRO } from 'src/app/shared/utils/mensagens-padrao';

import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'datatables.net';
//import { DATATABLES_EXPORT_BUTTONS } from 'src/app/shared/utils/datatables.config';

@Component({
  selector: 'app-lista-alcada',
  templateUrl: './lista-alcada.component.html',
  styleUrls: ['./lista-alcada.component.css'],
})
export class ListaAlcadaComponent implements OnInit, OnDestroy {
  // Informa o limite de dados trazidos pela API
  protected LIMITE_MAXIMO_DADOS = 1000;

  dtOptions: Config = {};

  // @ViewChild(DataTableDirective, { static: false })
  // dtElement: DataTableDirective;
  // @ViewChild('rodape', { static: true })
  // override rodape: ElementRef;

  readonly PESQUISA_KEY_STORAGE = 'ALCADA-FILTRO-PESQUISA';
  alcada: Alcada = {
    codTipoAlcadaResgate: 1,
    nome: 'Teste1',
    nomeRed: 'T1',
    dtIni: new Date(),
    ctrCodUsuInc: 1,
    ctrDthInc: new Date(),
    ctrCodUsuAtu: 1,
    ctrDthAtu: new Date(),
  };
  registros: Alcada[] = [
    {
      codTipoAlcadaResgate: 1,
      nome: 'Teste1',
      nomeRed: 'T1',
      percAlcada: 10,
      dtIni: new Date(),
      ctrCodUsuInc: 1,
      ctrDthInc: new Date(),
      ctrCodUsuAtu: 1,
      ctrDthAtu: new Date(),
    },
    {
      codTipoAlcadaResgate: 2,
      nome: 'Teste2',
      nomeRed: 'T2',
      percAlcada: 20,
      dtIni: new Date(),
      ctrCodUsuInc: 1,
      ctrDthInc: new Date(),
      ctrCodUsuAtu: 1,
      ctrDthAtu: new Date(),
    },
    {
      codTipoAlcadaResgate: 3,
      nome: 'Teste3',
      nomeRed: 'T3',
      percAlcada: 30,
      dtIni: new Date(),
      ctrCodUsuInc: 1,
      ctrDthInc: new Date(),
      ctrCodUsuAtu: 1,
      ctrDthAtu: new Date(),
    },
  ];
  isLoading: boolean;
  isLoadingTable: boolean;

  constructor(
    private readonly alcadaService: AlcadaService,
    private readonly location: Location,
    router: Router,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.limpar();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    //this.dtTrigger.unsubscribe();
  }

  limpar(): void {
    // if (!this.pesquisa) {
    //   this.pesquisa = new AlcadaFiltro();
    // } else {
    //   this.pesquisa.modelo = {} as Alcada;
    // }
    // this.selecionaPrimeiraAba();
  }

  pesquisar() {
    if (!this.isEnvioValido()) return;
    //this.pesquisa.dataHora = new Date();
    this.isLoading = true;
    // this.alcadaService.lista(this.pesquisa.modelo).subscribe({
    //   next: (data) => {
    //     this.registros = data;
    //     this.isLoading = false;
    //     this.mensagensTratamentoResultadoPesquisa(data);
    //     if (this.isDtInitialized) {
    //       // destrói o datatables atual para criá-lo novamente com novos dados
    //       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //         dtInstance.destroy();
    //         this.dtTrigger.next('');
    //       });
    //     } else {
    //       this.isDtInitialized = true;

    //       this.dtTrigger.next('');
    //     }
    //   },
    //   error: (er) => {
    //     this.trataErro(er);
    //   },
    // });
  }

  /**
   * Exibe mensagans a partir da quantidade de dados retornados
   * @param resultado Resultado da pesquisa
   */
  mensagensTratamentoResultadoPesquisa(resultado: Alcada[]) {
    if (resultado) {
      const quantidade: number = resultado.length;
      // switch (quantidade) {
      //   case this.LIMITE_MAXIMO_DADOS:
      //     this.toastr.warning(MENSAGEM_ERRO.MAIS_MIL_REGISTROS_PESQUISA);
      //     break;
      // }
    }
  }

  trataErro(erro: { status: number; error: any[] }) {
    if (erro.status === 400 || erro.status === 403) {
      erro.error.forEach((e) => {
        // if (e.hasOwnProperty('message')) this.toastr.error(e.message);
        // else if (e.hasOwnProperty('mensagem')) this.toastr.error(e.mensagem);
      });
    } else {
      this.location.back();
      throw erro;
    }
  }

  protected configuraTabela(
    nomeArquivoExportado: string,
    colunasExportadas: number[],
    mensagemErro: string
  ): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 50,
    //   language: {
    //     emptyTable: mensagemErro,
    //     zeroRecords: mensagemErro,
    //     lengthMenu: 'Exibir _MENU_ registros por página',
    //     url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
    //   },
    //   dom: 'Blfrtip',
    //   buttons: DATATABLES_EXPORT_BUTTONS(
    //     nomeArquivoExportado,
    //     colunasExportadas,
    //     this.rodape
    //   ),
    // };
  }

  /**
   * Remove o(s) registros(s) selecionado(s)
   */
  excluir() {
    //const registros = this.obtemRegistrosSelecionados();
    // Caso não haja registros a serem excluidos exibe a mensagem
    // if (!registros.length) {
    //   this.toastr.warning(
    //     'Não há item do objeto Tabela Alçada selecionado para Excluir.'
    //   );
    //   return;
    // }
    // Monta mensagem de confirmação de exclusão
    // const mensagemExclusao: string = this.montaMensagemExclusao(registros);
    // this.modal.abrirModalConfirmacao(
    //   mensagemExclusao,
    //   () => this.executaExclusao(registros),
    //   () => this.toastr.warning('Exclusão cancelada.')
    // );
  }

  /**
   * Solicita exclusão dos registros
   * @param registros Registros a serem excluidos
   */
  private executaExclusao(registros: Alcada[]) {
    this.alcadaService.exclui(registros).subscribe({
      next: () => {
        // Caso os registros tenham sido removidos será exibida a mensagem padrão de sucesso
        //this.toastr.success('Exclusão efetuada com sucesso.');
        this.pesquisar();
      },
      error: (er) => this.trataErro(er),
    });
  }

  /**
   * Monta a mensagem de exclusão
   * @param tabelasAlcada Períodos Remuneração a serem excluidas
   */
  montaMensagemExclusao(tabelasAlcada: Array<Alcada>): string {
    let listaDeTabelasAlcadaStr: string = '';

    tabelasAlcada.forEach(
      (x) =>
        (listaDeTabelasAlcadaStr += `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${x.codTipoAlcadaResgate} - ${x.nomeRed}`)
    );

    let mensagemExclusao: string = `Solicitada Exclusão de ${tabelasAlcada.length} itens do objeto Tabela Alçada<br />${listaDeTabelasAlcadaStr}<br /><br />Confirma Exclusão?`;

    return mensagemExclusao;
  }

  // Regras de Negócio
  isEnvioValido(): boolean {
    // const dataInicio = new Date(this.pesquisa.dtIni);
    // const dataFim = new Date(this.pesquisa.dtFim);
    const dataAtual = new Date();
    // O Componente padrão gera a data como -3h a partir da inserida. Portanto, precisamos voltar 1 dia e 3 horas (24h-3h = 21h)
    dataAtual.setHours(21, 0, 0, 0);
    dataAtual.setDate(dataAtual.getDate() - 1);

    // if (dataInicio.getTime() < new Date('1986-01-01').getTime()) {
    //   this.toastr.error(
    //     'O campo Data Inicial deve ser maior ou igual a 01/01/1986.'
    //   );
    //   return false;
    // }

    // if (dataFim.getTime() < new Date('1986-01-01').getTime()) {
    //   this.toastr.error('A Data Final deve ser maior do que 01/01/1986');
    //   return false;
    // }

    // if (dataFim.getTime() < dataInicio.getTime()) {
    //   this.toastr.error('A Data Final deve ser maior ou igual à Data Inicial.');
    //   return false;
    // }

    // if (
    //   (!this.isInteiro(this.pesquisa.codTipoAlcadaResgate) ||
    //     this.pesquisa.codTipoAlcadaResgate < 1) &&
    //   this.pesquisa.codTipoAlcadaResgate != undefined
    // ) {
    //   this.toastr.error(
    //     'O campo Tipo Alçada aceita somente valores numéricos positivos, com no máximo 8 inteiros.'
    //   );
    //   return false;
    // }

    // if (
    //   this.pesquisa.percAlcada < 0 &&
    //   this.pesquisa.percAlcada !== undefined
    // ) {
    //   this.toastr.error(
    //     'O campo Percentual aceita somente valores númericos positivos.'
    //   );
    //   return false;
    // }

    return true;
  }

  isInteiro(n: number): boolean {
    return n - Math.floor(n) === 0;
  }

  /**
   * Obtem o histórico do usuario
   * @param codUsuario
   * @param callback
   */
  // obtemHistoricoUsuario(codUsuario: any, dthHist: any, callback: any) {
  //   this.consultaUsuarioService
  //     .obtemHistoricoUsuario(
  //       codUsuario,
  //       dthHist,
  //       `${this.genericoApiUrl}/UsuarioSOE`
  //     )
  //     .then((historico) => {
  //       callback(historico[0]);
  //     });
  // }

  /**
   * Abre o modal de auditoria e passa as informações
   */

  // auditoria(registro: Alcada) {
  //   let usuarioInclusao: any;
  //   let usuarioAlteracao: any;

  //   this.obtemHistoricoUsuario(
  //     registro.ctrCodUsuInc,
  //     registro.ctrDthInc,
  //     (historico) => {
  //       usuarioInclusao = historico;
  //       this.obtemHistoricoUsuario(
  //         registro.ctrCodUsuAtu,
  //         registro.ctrDthInc,
  //         (historico) => {
  //           usuarioAlteracao = historico;
  //           this.modal.abrirModalAuditoria(
  //             usuarioInclusao,
  //             registro,
  //             usuarioAlteracao
  //           );
  //         }
  //       );
  //     }
  //   );
  // }

  /**
   * Navega para a página de edição
   * @param registro Registro a ser editado
   */
  // editar(registro?: Alcada): void {
  //   this.registrarFiltrosPesquisa(this.PESQUISA_KEY_STORAGE);

  //   if (registro) {
  //     this.router.navigate(['alcada/edita', registro.codTipoAlcadaResgate]);
  //   } else {
  //     // Obtém os registros selecionados
  //     const registros = this.obtemRegistrosSelecionados().map((t) => {
  //       return { codTipoAlcadaResgate: t.codTipoAlcadaResgate };
  //     });

  //     if (registros.length) {
  //       this.router.navigate(['alcada/editar-em-lote'], {
  //         queryParams: {
  //           alcada: JSON.stringify(registros),
  //         },
  //       });
  //     } else {
  //       this.toastr.warning(
  //         'Não há item do objeto Tabela Alçada selecionado para Editar.'
  //       );
  //     }
  //   }
  // }
}
