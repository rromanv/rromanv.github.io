const print = () => {
  const resume = document.querySelector('#resume')
  const myWindow = window.open('', '#resume', 'height=400,width=600')
  
  myWindow.document.write(resume.innerHTML)
  myWindow.document.close()
  myWindow.focus()
  myWindow.print()
  
}

const printBtn = document.querySelector('#print')

printBtn.addEventListener('click', print)