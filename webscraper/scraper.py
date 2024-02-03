from bs4 import BeautifulSoup
import requests

class Scraper:
    def __init__(self) -> None:
        pass
    def read(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        loans = soup.findAll('p', attrs={'class':'ct_rb fv_R6'})
        
        for loan in loans:
            print(loan.text)
