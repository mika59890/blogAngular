import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';
  posts = [
    {
      title: 'Porsche 911',
      content: 'La Porsche 911 est une voiture de sport et de luxe fabriquée par la firme allemande Porsche. ' +
      'La commercialisation de la première génération commence en 1964. Elle est alors la première ' +
      'intégralement conçue par la firme de Stuttgart. Plus de cinquante ans plus tard, le modèle historique ' +
      'de Porsche en conserve l\'esthétique et le nom. La 911, dont la version de type 991, est toujours ' +
      'produite et vendue. L\'architecture du moteur est restée inchangée jusqu\'à aujourd\'hui. Il s\'agit ' +
      'du 6-cylindres à plat (flat-six), disposé en porte-à-faux arrière.',
      love: '8',
      dontLove: '7',
      lovelts: '1',
      created_date: '1533301796387'
    },
    {
      title: 'Porsche 944',
      content: 'Issue du crayon de Anatole Lapine, un designer letton, la 944 fut présentée en 1981 au Salon ' +
      'automobile de Francfort.\n' + '\n' +
      'La 944 reprend les lignes de la 924, en les extrapolant. La 924 possède un bas-moteur Audi (d\'où ' +
      'le prix plus abordable), et la 944 (moteur 100 % Porsche) remplacera progressivement au catalogue ' +
      'sa devancière. La 924 sera en effet produite jusqu\'en 1988, les dernières séries (924S) intégrant ' +
      'même le moteur de la 944, légèrement « dégonflé » pour la circonstance (150 puis 160cv en 1988).\n' +
      '\n' +
      'Elle était prévu pour moderniser l\' image vieillissante de la célèbre 911 , et assurer un ' +
      'comportement routier plus équilibré (répartition des masses) .\n' +
      '\n' +
      'La carrosserie est galvanisée , réduisant les problèmes de corrosion .',
      love: '12',
      dontLove: '4',
      lovelts: '8',
      created_date: '1530300796387'
    },
    {
      title: 'Porsche Cayenne',
      content: 'Le Porsche Cayenne est une gamme d\'automobile SUV routier du constructeur allemand' +
      ' Porsche. ' + 'Il est lancé en décembre 2002 (955 puis 957 - Type 9PA) et renouvelé en mai 2010 ' +
      '(958 - Type 92A). ' + 'La troisième génération est présentée en août 2017 avant une exposition au ' +
      'Salon de l\'automobile de ' + 'Francfort en septembre 2017.',
      love: '8',
      dontLove: '17',
      lovelts: '-9',
      created_date: '1523301790387'
    }
  ];
}
