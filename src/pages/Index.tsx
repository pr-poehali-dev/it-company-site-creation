import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">ITCompany</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#support" className="text-gray-700 hover:text-primary transition-colors">Поддержка</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Заказать консультацию</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ваш надежный ИТ партнер
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Комплексные ИТ-услуги для вашего бизнеса: обслуживание компьютеров, программирование на 1С, аренда серверов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="animate-scale-in">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать сейчас
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-fade-in">
            <img 
              src="/img/aa876076-6069-4811-aef5-dbcb0532bb4d.jpg" 
              alt="Modern IT workspace"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-6">Полный спектр ИТ-услуг</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              От обслуживания компьютерного парка до разработки сложных корпоративных решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-primary" />
                </div>
                <CardTitle>Обслуживание ПК и серверов</CardTitle>
                <CardDescription>
                  Профессиональное обслуживание компьютерного парка и серверного оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Диагностика и ремонт</li>
                  <li>• Профилактическое обслуживание</li>
                  <li>• Настройка сетевого оборудования</li>
                  <li>• Круглосуточная поддержка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-secondary" />
                </div>
                <CardTitle>Программирование на 1С</CardTitle>
                <CardDescription>
                  Разработка и внедрение решений на платформе 1С:Предприятие
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Разработка конфигураций</li>
                  <li>• Доработка типовых решений</li>
                  <li>• Интеграция с внешними системами</li>
                  <li>• Обучение пользователей</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Server" size={32} className="text-green-500" />
                </div>
                <CardTitle>Аренда серверов</CardTitle>
                <CardDescription>
                  Надежные серверные решения для вашего бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Виртуальные и выделенные серверы</li>
                  <li>• Высокая производительность</li>
                  <li>• Гибкие тарифные планы</li>
                  <li>• Техническая поддержка 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">О нас</Badge>
              <h2 className="text-4xl font-bold mb-6">Команда экспертов с 10-летним опытом</h2>
              <p className="text-gray-600 mb-6">
                Мы специализируемся на предоставлении комплексных ИТ-услуг для малого и среднего бизнеса. 
                Наша команда состоит из сертифицированных специалистов с глубокими знаниями в области 
                информационных технологий.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-gray-600">Техподдержка</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-500">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime серверов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-500">10</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/31c5a312-3ceb-4d56-8c2d-f5fd25e3189f.jpg" 
                alt="Our team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-6">Прозрачное ценообразование</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный тарифный план для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>Базовый</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  от 5,000₽
                  <span className="text-sm font-normal text-gray-500">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Обслуживание до 10 ПК
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Техподдержка в рабочее время
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Удаленная диагностика
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle>Профессиональный</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  от 15,000₽
                  <span className="text-sm font-normal text-gray-500">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Обслуживание до 50 ПК
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Техподдержка 24/7
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Программирование на 1С
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Аренда VPS
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>Корпоративный</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  от 35,000₽
                  <span className="text-sm font-normal text-gray-500">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Неограниченное количество ПК
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Выделенный менеджер
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Выделенные серверы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Индивидуальные решения
                  </li>
                </ul>
                <Button className="w-full mt-6">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Поддержка</Badge>
            <h2 className="text-4xl font-bold mb-6">Мы всегда готовы помочь</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша служба поддержки работает круглосуточно, чтобы решить любые ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Телефонная поддержка</CardTitle>
                <CardDescription>24/7 горячая линия для экстренных случаев</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Email поддержка</CardTitle>
                <CardDescription>Ответ в течение 2 часов в рабочее время</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-green-500" />
                </div>
                <CardTitle className="text-lg">Онлайн чат</CardTitle>
                <CardDescription>Мгновенные ответы на ваши вопросы</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={24} className="text-orange-500" />
                </div>
                <CardTitle className="text-lg">Удаленная помощь</CardTitle>
                <CardDescription>Решение проблем через удаленный доступ</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Как быстро вы реагируете на заявки?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-left">Критические заявки обрабатываются в течение 15 минут, обычные - в течение 2 часов в рабочее время.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Предоставляете ли вы гарантию на выполненные работы?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-left">Да, мы предоставляем гарантию от 30 дней до 1 года в зависимости от типа работ.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваши ИТ-потребности? Мы всегда на связи
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Адрес офиса</h4>
                    <p className="text-gray-600">г. Москва, ул. Тверская, д. 1, офис 100</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 123-45-67 (бесплатно)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@itcompany.ru</p>
                    <p className="text-gray-600">support@itcompany.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+7 (xxx) xxx-xx-xx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Опишите ваши потребности..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ITCompany</h3>
              <p className="text-gray-400 mb-4">
                Ваш надежный партнер в мире информационных технологий
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Обслуживание ПК</li>
                <li>Программирование на 1С</li>
                <li>Аренда серверов</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Партнеры</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Документация</li>
                <li>База знаний</li>
                <li>Форум</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 ITCompany. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}