from django.shortcuts import render

def index(request):
    
    return render(
        request,
        'my_rainbow/index.html',
        {'colors': {
                    'red':'Красный',
                    'orange':'Оранжевый',
                    'yellow':'Желтый',
                    'green': 'Зеленый',
                    'aqua':'Голубой',
                    'blue':'Синий',
                    'violet':'Фиолетовый'}},
                    )