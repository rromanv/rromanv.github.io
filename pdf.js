import {jsPDF} from 'https://unpkg.com/browse/jspdf@2.5.1/dist/jspdf.es.js'


const getPDF = () => {
  const doc = new jsPDF()
  doc.addHTML(document.querySelector('main'), () => {
      doc.save('test.pdf')
  })
}

const pdfButton = document.getElementById('pdfBtn')
pdfButton.addEventListener('click', getPDF)