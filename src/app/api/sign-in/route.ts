import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
export const runtime = 'nodejs';
export async function POST(req: Request) {
  try {
    const {
      name,
      telephone,
      email,
      day,
      hours,
      groupName,
      nameParent,
      birthDate,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'biuro.szkrab@gmail.com',
      subject: `ZAPISY NA ZAJĘCIA STRONA - formularz szkoła szkrab od ${name}`,
      html: `
      <div><font size="4" color="#ff9900"><b>Imię i nazwisko kursanta:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${name}</font></div>
            <div><font size="4" color="#ff9900"><b>Imię i nazwisko opiekuna:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${nameParent}</font><font color="#000000" style="font-size: large;"></font></div>
            <div><font size="4" color="#ff9900"><b>Data urodzenia:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${birthDate}</font><font color="#000000" style="font-size: large;"></font></div>
             <div><font size="4" color="#ff9900"><b>E-mail:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${email}</font><font color="#000000" style="font-size: large;"></font></div>
            <font size="4"><font color="#ff9900" style="font-weight: bold;">Telefon:&nbsp;</font><font style="" color="#000000">
            ${telephone}</font></font>
            <div><font size="4" color="#ff9900"><b>Dzień:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${day}</font></div>
             <div><font size="4" color="#ff9900"><b>Godziny:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${hours}</font><font color="#000000" style="font-size: large;"></font></div>
             <div><font size="4" color="#ff9900"><b>Nazwa grupy:&nbsp;</b></font><font color="#ff9900" style="font-size: large; font-weight: bold;">&nbsp;</font><font color="#000000" style="font-size: large;">
            ${groupName}</font><font color="#000000" style="font-size: large;"></font></div>
            `,
    });

    return NextResponse.json({success: 'Wiadomość wysłana!'});
  } catch (error) {
    console.error('Błąd wysyłania e-maila:', error);
    return NextResponse.json(
      {error: 'Nie udało się wysłać wiadomości'},
      {status: 500}
    );
  }
}
