from bs4 import BeautifulSoup
import requests

class Scraper:
    def __init__(self) -> None:
        pass

    def readInfo(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        loanInfo = soup.findAll('td', attrs={'class':'h7_jf h7_Wp'})
        loanInfoDoc = open("loanAmts.txt", "w")
        for loans in loanInfo:
            loanInfoDoc.write(loans.text)
            loanInfoDoc.write("\n")
            print(loans.text)
    