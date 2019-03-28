function main()
{

  //-- Video 1
  video1 = document.getElementById("video1")

  video1.width = 200;
  video1.height= 100;

  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"

  video1.onmouseover = () => {
    video1.muted = !video1.muted;
    video1.style.backgroundColor = "red"
  }

  video1.onmouseout = () => {
    video1.style.backgroundColor = ""
  }

  //-- Video 2
  video2 = document.getElementById("video2")

  video2.width = 200;
  video2.height= 100;

  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.onmouseover = () => {
    video2.muted = !video2.muted;
    video2.style.backgroundColor = "red"
  }

  video2.onmouseout = () => {
    video2.style.backgroundColor = ""
  }

  //-- Video 3
  video3 = document.getElementById("video3")

  video3.width = 200;
  video3.height= 100;

  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.onmouseover = () => {
    video3.muted = !video1.muted;
    video3.style.backgroundColor = "red"
  }

  video3.onmouseout = () => {
    video3.style.backgroundColor = ""
  }

  //-- Video General
  video0 = document.getElementById("video0")

  video0.width = 200;
  video0.height= 100;

  ver = document.getElementById('play')

  video1.onclick = () => {
    video0.src = video1.src
    }
  video2.onclick = () => {
    video0.src = video2.src
    }
  video3.onclick = () => {
    video0.src = video3.src
    }

  }
