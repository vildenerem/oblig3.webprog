package web.prog;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO Billett (Film,Antall,Fornavn,Etternavn,Telefonnr,Epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(),
                innBillett.getAntall(),
                innBillett.getFornavn(),
                innBillett.getEtternavn(),
                innBillett.getTelefonnr(),
                innBillett.getEpost());
    }

    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billett ORDER BY ETTERNAVN";
        List<Billett> alleBilletter = db.query(sql, new DataClassRowMapper<>(Billett.class));
        return alleBilletter;
    }
    public void slette(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
