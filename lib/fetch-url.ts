"use server";
import { google } from "googleapis";

export const fetchUrl = async () => {
  const SPREADSHEET_ID = "1_Z_7_a06GyVTRUGzd3SNOqi4PzwpxxQ5UKO1lMl-W_I";
  try {
    const auth = await google.auth.getClient({
      projectId: "moonlit-byway-399112",
      credentials: {
        type: "service_account",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5BYJqj/Fb6xZD\nuDFtKzGkfgY/My36gJ/D8Xucq3tF/R3sRVzqOT+ss4xVHQE5B/hrYexT1zZVc8Wo\nsRg5z+KIOHJXIwt/eAfPHYgKbXT9IqAK6Edmo3Da/qaxZWGGVsAkZt/aHQrm2wn1\nTqbozJBxDS9jXaPyCRb+4H2UR1A64q7aMz1Kn6kF/WkZLi8nbnwfnBZaaSxpHorF\ncZhBHyCKohA/ja3X83+c9DKa0R3Ri09l6lmzMZL6/if1ttUkEgale3JQQtrQ6zkp\nT8OqYl76d/B6SwLRlPHo3aVyZ78kACPcfblRG/LbPoP08sxpt/KlEuX6QAVRteYG\nJ/B8VJUTAgMBAAECggEAOtmnRVjalvecIdcdFZHHHQCe4QxY5BR0fOE7Bba/o5/i\nnCvl5XRnLfoAOXRb1rWTzSgdAP/zvtNvu/v0bjMS5Ww65j914UofBcBpbJOrQfb4\n++8tAtcaxvV3tPY/wnimbg2wxxI0zQA/1yB405R5nxPoDk2TH6HHiDOEjhzuxoOY\nMejNblp0dLf5rJ6+iq7pTK3bbQQf2uwhG8fuVDQJ8Ve80jP/yoi+TWkoODeVEFUh\nv/MZgUVPsLsQ/0uPrHC+Qfpo4v887PytI+AkIHXo4eCQWJ2h7lwCrvMvgfPY4qUZ\n9yZKIvcuZObxy/7fOKJJnoaBH8C24xeqXRA7RIQp/QKBgQDjGG9zrybE/2rw1Rqj\niiNtdwawDOmC/CHKzmrXqdy/GtnrzeYlnuS28f0FRDacmQi4mteq/kXTjI9k2Lri\nanpPbg5LDHZPa36PvIUwh7ILQUmM5B8bMlynaNDqUUoAKVmCo05gcvlM3ZcIKf4o\nklD87wtq+3euvIIz+2h9gq+LDQKBgQDQkih/mFFE251aFzvhOAUZiDcuCJWN0V74\ntzuua3L2NtVZL0ju11BwbZ39/CbKlmN0xKoLUWrw17/49D3nGFJjUs3vIVyt7Vdd\nhDthWQfvK6nrSy9eDV4KsILwy31qaEN6qiWiuLMRB433u004DXGg9Qv5MJudqRV9\nxzIsLFQYnwKBgDQ5J1AkJDdDQXV2nDSljLYcnBYaMgzkLGU2CM3lixULeLfIVreq\nDZCgn335jNGAQ8goG5Z/+NDITyVyza9Jqyze8zyA9igXYThusvZRDjmWXvKedyTK\n9RGugfSQkwLsf2ASa/C0H+50Osou1frAgw1Xb3m/sGsngI2xr/rE9dd1AoGBAJLr\nchW3YQAFR4lPtoGGqaj7mAsYRukYZDMFN8g8rkWcCJuDQHfmOiaIQPPJrDWmzDZT\n1oiUeKVhBTzEJ9ri+h43FRNux89I0fLxE7cWNQ2YD2DMnHg/KFCVWBdw8E6FVYtR\n0aMXQiQr0yh/yvxCFBnSo/WL9QKROa9ZIxGUxER3AoGATydVkaUSrznYaaB0ARcH\nNAL99e7Wbe7eOjMZE2gA1n9QhRyhfmUunoHkomDCdh/Ym28B5Aq9cc9BxLcbCtpk\nil8gAlw8EEWyPeM1mqEUd/7rPPAaIdCppmgz4cTgrcm/Jjj1d1yhr2EQdHSjIREr\n62nfpQzPYvxz28eEeEyr6SM=\n-----END PRIVATE KEY-----\n",
        client_email: "indexing@moonlit-byway-399112.iam.gserviceaccount.com",
        client_id: "102612675732796744668",
        token_url: "https://oauth2.googleapis.com/token",
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1:A1",
    });
    // @ts-ignore
    return data.data.values[0][0] as string;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return null;
  }
};
