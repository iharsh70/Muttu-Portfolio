import { ExternalLink, Download, Calendar } from "lucide-react";

export const CertificateCard = ({ title, issuer, date, href, thumb }) => {
  return (
    <article className="glass rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start">
      <div className="w-full sm:w-36 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-muted-foreground/5 flex items-center justify-center">
        {thumb ? (
          <img src={thumb} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-muted-foreground/70 font-semibold">Cert</div>
        )}
      </div>                                                                

      <div className="flex-1 w-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-3 items-center">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> <span>{date}</span>
          </span>
          <span className="inline-block">•</span>
          <span>{issuer}</span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 transition"
          >
            <ExternalLink className="w-4 h-4" /> View
          </a>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 transition"
          >
            <Download className="w-4 h-4" /> Download
          </a>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
