package web.prog;

public class Billett {
    int Id;
    String Film;
    int Antall;
    String Fornavn;
    String Etternavn;
    int Telefonnr;
    String Epost;


    public Billett(String film, int antall, String fornavn, String etternavn, int telefonnr, String epost) {
        Film = film;
        Antall = antall;
        Fornavn = fornavn;
        Etternavn = etternavn;
        Telefonnr = telefonnr;
        Epost = epost;
    }

    public String getFilm() {
        return Film;
    }

    public void setFilm(String film) {
        Film = film;
    }

    public int getAntall() {
        return Antall;
    }

    public void setAntall(int antall) {
        Antall = antall;
    }

    public String getFornavn() {
        return Fornavn;
    }

    public void setFornavn(String fornavn) {
        Fornavn = fornavn;
    }

    public String getEtternavn() {
        return Etternavn;
    }

    public void setEtternavn(String etternavn) {
        Etternavn = etternavn;
    }

    public int getTelefonnr() {
        return Telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        Telefonnr = telefonnr;
    }

    public String getEpost() {
        return Epost;
    }

    public void setEpost(String epost) {
        Epost = epost;
    }
}

