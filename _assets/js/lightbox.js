import Tobi from 'rqrauhvmra__tobi'
import { loadStyle } from './helper/loadstyle'

loadStyle('lightbox.css')

window.tobi = new Tobi({
  navLabel: ['Vorheriges Bild', 'Nächstes Bild'],
  closeLabel: 'Schließen',
  counter: false,
  zoom: false,
  autoplayVideo: true,
  captions: false
})
