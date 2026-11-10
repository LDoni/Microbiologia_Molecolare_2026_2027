# LAB 04 - Host-range analysis, short and transparent R exercise
# This script requires a VERIFIED csv made from actual experimental data.
# DO NOT fill absent experimental combinations with negative results.
# Required columns: phage_id, host_id, result
# Allowed values of result: positive, negative, not_tested

file <- 'lab04_host_range_verified.csv'  # supplied by the course website
if (!file.exists(file)) stop('The validated student dataset is not present')
dat <- read.csv(file, stringsAsFactors = FALSE)
required <- c('phage_id', 'host_id', 'result')
stopifnot(all(required %in% names(dat)))
stopifnot(all(dat$result %in% c('positive', 'negative', 'not_tested')))
stopifnot(!anyDuplicated(dat[c('phage_id','host_id')]))

# Inspect the actual dataset
head(dat)
table(dat$result, useNA='ifany')

hosts <- sort(unique(dat$host_id))
phages <- sort(unique(dat$phage_id))
M <- matrix(NA_real_, nrow=length(phages), ncol=length(hosts),
            dimnames=list(phages, hosts))
for (i in seq_len(nrow(dat))) {
  value <- switch(dat$result[i], positive=1, negative=0, not_tested=NA_real_)
  M[dat$phage_id[i], dat$host_id[i]] <- value
}
# Frequency of observed positives / number tested, not / number of all possible pairs
n_positive <- rowSums(M == 1, na.rm=TRUE)
n_tested <- rowSums(!is.na(M))
coverage <- ifelse(n_tested > 0, n_positive/n_tested, NA_real_)
print(data.frame(phage=rownames(M), positive=n_positive, tested=n_tested,
                 fraction_positive=round(coverage,2)))

# Simple plot: grey = not tested; pale = tested negative; dark = tested positive
op <- par(mar=c(9,8,3,2))
image(x=seq_along(hosts),y=seq_along(phages), z=t(M),
      col=c('#e0e7eb','#246b83'), zlim=c(0,1), axes=FALSE,
      xlab='',ylab='',main='Observed phage-host interactions')
axis(1,at=seq_along(hosts),labels=hosts,las=2,cex.axis=.7)
axis(2,at=seq_along(phages),labels=phages,las=2,cex.axis=.7)
par(op)
# Note: image() colors NA cells with background, not explicitly grey.
# An improved site figure should add a clear 'not tested' legend/background.
