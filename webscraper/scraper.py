from bs4 import BeautifulSoup
import requests

class Scraper:
    def __init__(self) -> None:
        pass

    def readLender(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        lenders = soup.findAll('p', attrs={'class':'ct_rb fv_R6'})
        for lender in lenders:
            print(lender.text)
    
    def readMaxLoanAmount(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        loanAmts = soup.findAll('td', attrs={'class':'h7_jf h7_Wp'})
        for loans in loanAmts:
            print(loans.text)
    
    def readMinCreditScore(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        scores = soup.findAll('p', attrs={'class':'ct_rb fv_R6'})
        for score in scores:
            print(score.text)
