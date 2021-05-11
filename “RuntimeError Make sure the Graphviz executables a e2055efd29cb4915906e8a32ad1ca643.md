# “RuntimeError: Make sure the Graphviz executables are on your system's path”

완료: Yes
유형: Big Data
자료: https://stackoverflow.com/questions/35064304/runtimeerror-make-sure-the-graphviz-executables-are-on-your-systems-path-aftv
작성일시: 2021년 5월 10일 오후 9:11
작성자: 예은 김

# “RuntimeError: Make sure the Graphviz executables are on your system's path”after installing Graphviz 2.38

(Graphviz Path에 관한 오류)

## Q)

![%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/1.jpg](%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/1.jpg)

- Q) Graphviz 2.38 설치 후, 런타임 오류 : Graphviz 실행 파일이 경로에 있는지 확인하세요.라는 오류가 발생했어요!

    <질문자의 문제점 요약>

    1)  Graphviz 2.38을 C:\Python34 폴더안에서 설치하였고, pip install Graphviz를 실행하여 설치했을 때에도, 아무 문제 없이 진행되었다.

    2) 시스템 경로도 C:\Python34\bin으로 추가했다.

    3) filename=dot.render(filename='test') 코드를 Graphviz 실행을 위해서 테스트해보았는데 런타임 오류가 나타났다.

    4) 새롭게 객체를 생성하여도 오류가 발생했다.

    5) Graphviz 삭제와 설치를 반복하였지만, 오류가 계속 되고 있다.

    설치할 때는 오류가 없이 잘 설치되었다. 시스템의 경로도 추가로 지정까지 해주었지만,  Graphviz를 실행하면 시스템 경로를 확인하라는 오류가 발생했다. 오류를 해결하기 위해서, 새로운 객체를 생성하여서 진행해보고 설치의 오류를 생각해서 삭제와 설치를 반복했지만, 오류는 계속되었다.

## A)

![%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/2.jpg](%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/2.jpg)

- A) Ubuntu를 사용할 때,

    파이썬이 아닌 시스템(CMD)에서 Graphize를 설치한 후,  Ubuntu에서 

    sudo apt-get install graphviz

    를 입력하여 진행해야한다. 

    만약 위에 코드를 입력하여도 실행되지않는다면,

    sudo apt-get update && sudo apt-get upgrade

    를 입력하면 실행된다.

![%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/3.jpg](%E2%80%9CRuntimeError%20Make%20sure%20the%20Graphviz%20executables%20a%20e2055efd29cb4915906e8a32ad1ca643/3.jpg)

- A) Window를 사용할 때,

    Window를 사용할 때,

    import os

    os environ['PATH'] += os.pathsep + 'D:/Program Files (x86)/Graphviz2.38/bin/'

    윈도우는 위의 두 줄을 추가해주면 된다. 'D:/Program Files (x86)/Graphviz2.38/bin/' 대신 본인의 bin 파일의 위치로 적어주면 문제를 해결할 수 있다.

출처 : [https://stackoverflow.com/questions/35064304/runtimeerror-make-sure-the-graphviz-executables-are-on-your-systems-path-aft](https://stackoverflow.com/questions/35064304/runtimeerror-make-sure-the-graphviz-executables-are-on-your-systems-path-aft)