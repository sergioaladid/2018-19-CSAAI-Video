function main()
{

  //-- Video 1
  video1 = document.getElementById("video1")
  video1.width = 400;
  video1.height= 200;
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.onmouseover = () => {
    video1.muted = false;
    video1.style.backgroundColor = "red"
  }
  video1.onmouseout = () => {
    video1.muted = true;
    video1.style.backgroundColor = ""
  }

  //-- Video 2
  video2 = document.getElementById("video2")
  video2.width = 400;
  video2.height= 200;
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.onmouseover = () => {
    video2.muted = false;
    video2.style.backgroundColor = "red"
  }
  video2.onmouseout = () => {
    video2.muted = true;
    video2.style.backgroundColor = ""
  }

  //-- Video 3
  video3 = document.getElementById("video3")
  video3.width = 400;
  video3.height= 200;
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.onmouseover = () => {
    video3.muted = false;
    video3.style.backgroundColor = "red"
  }
  video3.onmouseout = () => {
    video3.muted = true;
    video3.style.backgroundColor = ""
  }

  //-- Video General
  video0 = document.getElementById("video0")
  video0.width = 800;
  video0.height= 400;
  video0.src = "https://thumbs.dreamstime.com/videothumb_large7947/79475355.mp4"
  video1.onclick = () => {
    video0.src = video1.src
    video0.currentTime = video1.currentTime;
    }
  video2.onclick = () => {
    video0.src = video2.src
    video0.currentTime = video2.currentTime;
    }
  video3.onclick = () => {
    video0.src = video3.src
    video0.currentTime = video2.currentTime;
    }
  }
