import {localAbstracts} from "../js/papers.js";

var abstract1 = "We analysed primary breast cancers by genomic DNA copy number arrays, DNA methylation, exome sequencing, messenger RNA arrays, microRNA sequencing and reverse-phase protein arrays. Our ability to integrate information across platforms provided key insights into previously defined gene expression subtypes and demonstrated the existence of four main breast cancer classes when combining data from five platforms, each of which shows significant molecular heterogeneity. Somatic mutations in only three genes (TP53, PIK3CA and GATA3) occurred at > 10% incidence across all breast cancers; however, there were numerous subtype-associated and novel gene mutations including the enrichment of specific mutations in GATA3, PIK3CA and MAP3K1 with the luminal A subtype. We identified two novel protein-expression-defined subgroups, possibly produced by stromal/microenvironmental elements, and integrated analyses identified specific signalling pathways dominant in each molecular subtype including a HER2/phosphorylated HER2/EGFR/phosphorylated EGFR signature within the HER2-enriched expression subtype. Comparison of basal-like breast tumours with high-grade serous ovarian tumours showed many molecular commonalities, indicating a related aetiology and similar therapeutic opportunities. The biological finding of the four main breast cancer subtypes caused by different subsets of genetic and epigenetic abnormalities raises the hypothesis that much of the clinically observable plasticity and heterogeneity occurs within, and not across, these major biological subtypes of breast cancer."

var abstract2 = "We pooled data from more than 10,000 cases of invasive breast cancer from 12 studies that had collected information on hormone receptor status, human epidermal growth factor receptor-2 (HER2) status, and at least one basal marker (cytokeratin [CK]5/6 or epidermal growth factor receptor [EGFR]) together with survival time data. Tumours were classified as luminal and nonluminal tumours according to hormone receptor expression. These two groups were further subdivided according to expression of HER2, and finally, the luminal and nonluminal HER2-negative tumours were categorised according to expression of basal markers. Changes in mortality rates over time differed by subtype. In women with luminal HER2-negative subtypes, mortality rates were constant over time, whereas mortality rates associated with the luminal HER2-positive and nonluminal subtypes tended to peak within 5 y of diagnosis and then decline over time. In the first 5 y after diagnosis the nonluminal tumours were associated with a poorer prognosis, but over longer follow-up times the prognosis was poorer in the luminal subtypes, with the worst prognosis at 15 y being in the luminal HER2-positive tumours. Basal marker expression distinguished the HER2-negative luminal and nonluminal tumours into different subtypes. These patterns were independent of any systemic adjuvant therapy."

var abstract3 = "Breast cancer is heterogeneous in prognoses and drug responses. To organize breast cancers by gene expression independent of statistical methodology, we identified the Breast Cancer Consensus Subtypes (BCCS) as the consensus groupings of six different subtyping methods. Our classification software identified seven BCCS subtypes in a study cohort of publicly available data (n = 5950) including METABRIC, TCGA-BRCA, and data assayed by Affymetrix arrays. All samples were fresh-frozen from primary tumors. The estrogen receptor-positive (ER+) BCCS subtypes were: PCS1 (18%) good prognosis, stromal infiltration; PCS2 (15%) poor prognosis, highly proliferative; PCS3 (13%) poor prognosis, highly proliferative, activated IFN-gamma signaling, cytotoxic lymphocyte infiltration, high tumor mutation burden; PCS4 (18%) good prognosis, hormone response genes highly expressed. The ER− BCCS subtypes were: NCS1 (11%) basal; NCS2 (10%) elevated androgen response; NCS3 (5%) cytotoxic lymphocyte infiltration; unclassified tumors (9%). HER2+ tumors were heterogeneous with respect to BCCS."

var abstract4 = "Breast cancer is the most frequently found cancer in women and the one most often subjected to genetic analysis. Nonetheless, it has been causing the largest number of women's cancer-related deaths. PAM50, the intrinsic subtype assay for breast cancer, is beneficial for diagnosis but does not explain each subtype’s mechanism. Deep learning can predict the subtypes from genetic information more accurately than conventional statistical methods. However, the previous studies did not directly use deep learning to examine which genes associate with the subtypes. To reveal the mechanisms embedded in the PAM50 subtypes, we developed an explainable deep learning model called a point-wise linear model, which uses meta-learning to generate a custom-made logistic regression for each sample. We developed an explainable deep learning model called a point-wise linear model, which uses meta-learning to generate a custom-made logistic regression for each sample. Logistic regression is familiar to physicians, and we can use it to analyze which genes are important for prediction. The custom-made logistic regression models generated by the point-wise linear model used the specific genes selected in other subtypes compared to the conventional logistic regression model: the overlap ratio is less than twenty percent. Analyzing the point-wise linear model’s inner state, we found that the point-wise linear model used genes relevant to the cell cycle-related pathways."

var abstract5 = "The Androgen Receptor (AR) is a potential prognostic marker and therapeutic target in breast cancer. We evaluated AR protein expression in high-risk breast cancer treated in the adjuvant setting. Tumors were subtyped into luminal (ER+/PgR±/AR±), molecular apocrine (MAC, [ER−/PgR−/AR+]) and hormone receptor negative carcinomas (HR-negative, [ER−/PgR−/AR−]). Subtyping was evaluated with respect to prognosis and to taxane therapy. High histologic grade (p < 0.001) and increased proliferation (p = 0.001) more often appeared in MAC and HR-negative than in luminal tumors. Patients with MAC had outcome comparable to the luminal group, while patients with HR-negative disease had increased risk for relapse and death. MAC outcome was favorable upon taxane-containing treatment; this remained significant upon multivariate analysis for overall survival (HR 0.31, 95%CI 0.13–0.74, interaction p = 0.035) and as a trend for time to relapse (p = 0.15). In conclusion, AR-related subtyping of breast cancer may be prognostic and serve for selecting optimal treatment combinations."

var abstract6 = "Extracellular vesicles (EVs) are a potential source of disease-associated biomarkers for diagnosis. In breast cancer, comprehensive analyses of EVs could yield robust and reliable subtype-specific biomarkers that are still critically needed to improve diagnostic routines and clinical outcome. Here, we show that proteome profiles of EVs secreted by different breast cancer cell lines are highly indicative of their respective molecular subtypes, even more so than the proteome changes within the cancer cells. Moreover, we detected molecular evidence for subtype-specific biological processes and molecular pathways, hyperphosphorylated receptors and kinases in connection with the disease, and compiled a set of protein signatures that closely reflect the associated clinical pathophysiology. These unique features revealed in our work, replicated in clinical material, collectively demonstrate the potential of secreted EVs to differentiate between breast cancer subtypes and show the prospect of their use as non-invasive liquid biopsies for diagnosis and management of breast cancer patients."

var abstract7 = "Many methodologies have been used in research to identify the intrinsic subtypes of breast cancer commonly known as Luminal A, Luminal B, HER2-Enriched (HER2-E) and Basal-like. The PAM50 gene set is often used for gene expression-based subtyping; however, surrogate subtyping using panels of immunohistochemical (IHC) markers are still widely used clinically. Discrepancies between these methods may lead to different treatment decisions. We used the PAM50 RT-qPCR assay to expression profile 814 tumors from the GEICAM/9906 phase III clinical trial that enrolled women with locally advanced primary invasive breast cancer. All samples were scored at a single site by IHC for estrogen receptor (ER), progesterone receptor (PR), and Her2/neu (HER2) protein expression. Equivocal HER2 cases were confirmed by chromogenic in situ hybridization (CISH). Single gene scores by IHC/CISH were compared with RT-qPCR continuous gene expression values and “intrinsic” subtype assignment by the PAM50. High, medium, and low expression for ESR1, PGR, ERBB2, and proliferation were selected using quartile cut-points from the continuous RT-qPCR data across the PAM50 subtype assignments. ESR1, PGR, and ERBB2 gene expression had high agreement with established binary IHC cut-points (area under the curve (AUC) ≥ 0.9). Estrogen receptor positivity by IHC was strongly associated with Luminal (A and B) subtypes (92%), but only 75% of ER negative tumors were classified into the HER2-E and Basal-like subtypes. Luminal A tumors more frequently expressed PR than Luminal B (94% vs 74%) and Luminal A tumors were less likely to have high proliferation (11% vs 77%). Seventy-seven percent (30/39) of ER-/HER2+ tumors by IHC were classified as the HER2-E subtype. Triple negative tumors were mainly comprised of Basal-like (57%) and HER2-E (30%) subtypes. Single gene scoring for ESR1, PGR, and ERBB2 was more prognostic than the corresponding IHC markers as shown in a multivariate analysis. The standard immunohistochemical panel for breast cancer (ER, PR, and HER2) does not adequately identify the PAM50 gene expression subtypes. Although there is high agreement between biomarker scoring by protein immunohistochemistry and gene expression, the gene expression determinations for ESR1 and ERBB2 status was more prognostic."

var abstract8 = "Introduction Breast cancer subtyping and prognosis have been studied extensively by gene expression profiling, resulting in disparate signatures with little overlap in their constituent genes. Although a previous study demonstrated a prognostic concordance among gene expression signatures, it was limited to only one dataset and did not fully elucidate how the different genes were related to one another nor did it examine the contribution of well-known biological processes of breast cancer tumorigenesis to their prognostic performance.To address the above issues and to further validate these initial findings, we performed the largest meta-analysis of publicly available breast cancer gene expression and clinical data, which are comprised of 2,833 breast tumors. Gene coexpression modules of three key biological processes in breast cancer (namely, proliferation, estrogen receptor [ER], and HER2 signaling) were used to dissect the role of constituent genes of nine prognostic signatures.Using a meta-analytical approach, we consolidated the signatures associated with ER signaling, ERBB2 amplification, and proliferation. Previously published expression-based nomenclature of breast cancer 'intrinsic' subtypes can be mapped to the three modules, namely, the ER.sup.-.sup./HER2.sup.- .sup.(basal-like), the HER2.sup.+ .sup.(HER2-like), and the low- and high-proliferation ER.sup.+.sup./HER2.sup.- .sup.subtypes (luminal A and B). We showed that all nine prognostic signatures exhibited a similar prognostic performance in the entire dataset. Their prognostic abilities are due mostly to the detection of proliferation activity. Although ER.sup.- .sup.status (basal-like) and ERBB2.sup.+ .sup.expression status correspond to bad outcome, they seem to act through elevated expression of proliferation genes and thus contain only indirect information about prognosis. Clinical variables measuring the extent of tumor progression, such as tumor size and nodal status, still add independent prognostic information to proliferation genes. This meta-analysis unifies various results of previous gene expression studies in breast cancer. It reveals connections between traditional prognostic factors, expression-based subtyping, and prognostic signatures, highlighting the important role of proliferation in breast cancer prognosis."

var abstract9 = "Background: Classification of breast cancer into intrinsic subtypes has clinical and epidemiologic importance. To examine accuracy of IHC-based methods for identifying intrinsic subtypes, a three-biomarker IHC panel was compared with the clinical record and RNA-based intrinsic (PAM50) subtypes. Automated scoring of estrogen receptor (ER), progesterone receptor (PR), and HER2 was performed on IHC-stained tissue microarrays comprising 1,920 cases from the African American Breast Cancer Epidemiology and Risk (AMBER) consortium. Multiple cores (1–6/case) were collapsed to classify cases, and automated scoring was compared with the clinical record and to RNA-based subtyping. Automated analysis of the three-biomarker IHC panel produced high agreement with the clinical record (93% for ER and HER2, and 88% for PR). Cases with low tumor cellularity and smaller core size had reduced agreement with the clinical record. IHC-based definitions had high agreement with the clinical record regardless of hormone receptor positivity threshold (1% vs. 10%), but a 10% threshold produced highest agreement with RNA-based intrinsic subtypes. Using a 10% threshold, IHC-based definitions identified the basal-like intrinsic subtype with high sensitivity (86%), although sensitivity was lower for luminal A, luminal B, and HER2-enriched subtypes (76%, 40%, and 37%, respectively). Three-biomarker IHC-based subtyping has reasonable accuracy for distinguishing basal-like from nonbasal-like, although additional biomarkers are required for accurate classification of luminal A, luminal B, and HER2-enriched cancers. Epidemiologic studies relying on three-biomarker IHC status for subtype classification should use caution when distinguishing luminal A from luminal B and when interpreting findings for HER2-enriched cancers."

var abstract10 = "ER, PR and HER2 status in breast cancer are important markers for the selection of drug therapy. By immunohistochemistry (IHC), three major breast cancer subtypes can be distinguished: Triple negative (TNIHC), [HER2+.sub.IHC] and [Luminal.sub.IHC] ([ER+.sub.IHC]/[HER2-.sub.IHC]). By using the intrinsic gene set defined by Hu et al. five molecular subtypes ([Basal.sub.mRNA], [HER2+.sub.mRNA], Luminal [A.sub.mRNA], Luminal [B.sub.mRNA] and Normal-[like.sub.mRNA]) can be defined. We studied the concordance between analogous subtypes and their prediction of response to neoadjuvant chemotherapy. We classified 195 breast tumors by both IHC and mRNA expression analysis of patients who received neoadjuvant treatment at the Netherlands Cancer institute for Stage II--III breast cancer between 2000 and 2007. The pathological complete remission (pCR) rate was used to assess chemotherapy response. The IHC and molecular subtypes showed high concordance with the exception of the [HER2+.sub.IHC] group. 60% of the [HER2+.sub.IHC] tumors were not classified as [HER2+.sub.mRNA]. The [HER2+.sub.IHC]/Luminal A or BmRNA group had a low response rate to a trastuzumab-chemotherapy combination with a pCR rate of 8%, while the [HER2+.sub.mRNA] group had a pCR rate of 54%. The Luminal [A.sub.mRNA] and Luminal [B.sub.mRNA] groups showed similar degrees of response to chemotherapy. Neither the PR status nor the endocrine responsiveness index subdivided the [ER+.sub.IHC] tumors accurately into Luminal [A.sub.mRNA] and Luminal [B.sub.mRNA] groups. Molecular subtyping suggests the existence of a [HER2+.sub.IHC]/[Luminal.sub.mRNA] group that responds poorly to trastuzumab-based chemotherapy. For [Luminal.sub.IHC] and triple [negative.sub.IHC] tumors, further subdivision into molecular subgroups does not offer a clear advantage in treatment selection."

var abstract11 = "Triple-negative breast cancer (TNBC) is a heterogeneous disease; gene expression analyses recently identified 6 distinct TNBC subtypes, each of which displays a unique biology. Exploring novel approaches for the treatment of these subtypes is critical, especially because the median survival for women with metastatic TNBC is less than 12 months, and virtually all women with metastatic TNBC ultimately will die of their disease despite systemic therapy. To date, not a single targeted therapy has been approved for the treatment of TNBC, and cytotoxic chemotherapy remains the standard treatment. In this review, the authors discuss recent developments in subtyping TNBC and the current and upcoming therapeutic strategies being explored in an attempt to target TNBC."

var abstract12 = "Intrinsic subtypes are widely accepted for the classification of breast cancer. Lacking gene expression data, surrogate classifications based on immunohistochemistry (IHC) have been proposed. A recent St. Gallen consensus meeting recommends to use this \"surrogate intrinsic subtypes\" for predicting adjuvant chemotherapy resistance, implying that \"Surrogate Luminal A\" breast cancers should only receive endocrine therapy. In this study we assessed both gene expression based intrinsic subtypes as well as surrogate intrinsic subtypes regarding their power to predict neoadjuvant chemotherapy benefit. Single institution data of 560 breast cancer patients were reviewed. Gene expression data was available for 247 patients. Subtypes were determined on the basis of IHC, Ki67, histological grade, endocrine responsiveness, and gene expression, and were correlated with chemotherapy response and recurrence-free survival. In ER+/HER2- tumors, a high histological grade was the best predictor for chemotherapy benefit, both in terms of pCR (p = 0.004) and recurrence-free survival (p = 0.002). The gene expression based and surrogate intrinsic subtype based on Ki67 had no predictive or prognostic value in ER+/HER2- tumors. Histological grade, ER, PR, and HER2 were the best predictive factors for chemotherapy response in breast cancer. We propose to continue the conventional use of these markers."

var abstract13 = "The molecular classification of breast cancer mainly focuses on ER, PR, and HER2 status detected by immunohistochemistry (IHC) analysis. To explore the clinical value of breast cancer classification based on gene-based diagnosis of the triple markers, we measured ESR1, PGR, and ERBB2 mRNA levels in 294 breast cancer patients by reverse transcription quantitative polymerase chain reaction (RT-QPCR), and examined their correlation with ER, PR, and HER2 status detected by IHC. We observed a significant positive correlation between the mRNA levels of the triple markers and their protein status (ESR1 vs. ER, Spearman's [rho] = 0.527, P = 2.3 x [10.sup.-22]; PGR vs. PR, Spearman's [rho] = 0.631, P = 5.1 x [10.sup.-34]; ERBB2 vs. HER2, Spearman's [rho] = 0.439, P = 3.0 x [10.sup.-15]). Furthermore, the subtypes determined by mRNA levels of the triple markers were significantly correlated to the subtypes determined based on their protein status (Spearman's [rho] = 0.342, P = 2.0 x [10.sup.-8]). Kaplan-Meier analysis showed that the subtypes determined by mRNA levels of the triple-marker could predict the disease-free survival (DFS) in breast cancer patients. Multivariate analysis showed that the predictive value of DFS could be confirmed for the subtypes determined by mRNA levels of the triple markers (HR = 2.285, P = 0.008) but not for those determined by their protein status. Taken together, our results suggest that the detection of ESR1/PGR/ERBB2 mRNA levels by RT-QPCR is a better approach for subtyping breast cancer and predicting the prognosis."

var abstract14 = "Triple-negative breast cancer (TNBC), a specific subtype of breast cancer that does not express estrogen receptor (ER), progesterone receptor (PR), or human epidermal growth factor receptor 2 (HER-2), has clinical features that include high invasiveness, high metastatic potential, proneness to relapse, and poor prognosis. Because TNBC tumors lack ER, PR, and HER2 expression, they are not sensitive to endocrine therapy or HER2 treatment, and standardized TNBC treatment regimens are still lacking. Therefore, development of new TNBC treatment strategies has become an urgent clinical need. By summarizing existing treatment regimens, therapeutic drugs, and their efficacy for different TNBC subtypes and reviewing some new preclinical studies and targeted treatment regimens for TNBC, this paper aims to provide new ideas for TNBC treatment."

var abstract15 = "Routine clinical management of breast cancer (BC) currently depends on surrogate subtypes according to estrogen- (ER) and progesterone (PR) receptor, Ki-67, and HER2-status. However, there has been growing demand for reduced immunohistochemistry (IHC) turnaround times. The Xpert[R] Breast Cancer STRAT4* Assay (STRAT4)*, a standardized test for ESR1/PGR/MKi67/ERBB2 mRNA biomarker assessment, takes less than 2 hours. Here, we compared the concordance between the STRAT4 and IHC/SISH, thereby evaluating the effect of method choice on surrogate subtype assessment and adjuvant treatment decisions.In total, 100 formalin-fixed paraffin-embedded core needle biopsy (CNB) samples and matching surgical specimens for 98 patients with primary invasive BC were evaluated using the STRAT4 assay. The concordance between STRAT4 and IHC was calculated for individual markers for the CNB and surgical specimens. In addition, we investigated whether changes in surrogate BC subtyping based on the STRAT4 results would change adjuvant treatment recommendations. The overall percent agreement (OPA) between STRAT4 and IHC/SISH ranged between 76 and 99% for the different biomarkers. Concordance for all four biomarkers in the surgical specimens and CNBs was only 66 and 57%, respectively. In total, 74% of surgical specimens were concordant for subtype, regardless of the method used. IHC- and STRAT4-based subtyping for the surgical specimen were shown to be discordant for 25/98 patients and 18/25 patients would theoretically have been recommended a different adjuvant treatment, primarily receiving more chemotherapy and trastuzumab. A comparison of data from IHC/in situ hybridization and STRAT4 demonstrated that subsequent changes in surrogate subtyping for the surgical specimen may theoretically result in more adjuvant treatment given, primarily with chemotherapy and trastuzumab."

var abstract16 = "Evidence is accumulating that breast cancer is not one disease but many separate diseases. DNA microarray-based gene expression profiling has demonstrated subtypes with distinct phenotypic features and clinical responses. Prominent among the new subtypes is ‘basal-like’ breast cancer, one of the ‘intrinsic’ subtypes defined by negativity for the estrogen, progesterone, and HER2/neu receptors and positivity for cytokeratins-5/6. Focusing on basal-like breast cancer, we discuss how molecular technologies provide new chemotherapy targets, optimising treatment whilst sparing patients from unnecessary toxicity. Clinical trials are needed that incorporate long-term follow-up of patients with well-characterised tumour markers. Whilst the absence of an obvious dominant oncogene driving basal-like breast cancer and the lack of specific therapeutic agents are serious stumbling blocks, this review will highlight several promising therapeutic candidates currently under evaluation. Thus, new molecular technologies should provide a fundamental foundation for better understanding breast and other cancers which may be exploited to save lives. (Part of a Multi-author Review)"

var abstract17 = "Breast cancer is a highly heterogeneous disease. Subtyping the disease and identifying the genomic features driving these subtypes are critical for precision oncology for breast cancer. This study focuses on developing a new computational approach for breast cancer subtyping. We proposed to use Bayesian tensor factorization (BTF) to integrate multi-omics data of breast cancer, which include expression profiles of RNA-sequencing, copy number variation, and DNA methylation measured on 762 breast cancer patients from The Cancer Genome Atlas. We applied a consensus clustering approach to identify breast cancer subtypes using the factorized latent features by BTF. Subtype-specific survival patterns of the breast cancer patients were evaluated using Kaplan-Meier (KM) estimators. The proposed approach was compared with other state-of-the-art approaches for cancer subtyping. The BTF-subtyping analysis identified 17 optimized latent components, which were used to reveal six major breast cancer subtypes. Out of all different approaches, only the proposed approach showed distinct survival patterns (p < 0.05). Statistical tests also showed that the identified clusters have statistically significant distributions. Our results showed that the proposed approach is a promising strategy to efficiently use publicly available multi-omics data to identify breast cancer subtypes."

var abstract18 = "Early detection is crucial for achieving a reduction in breast cancer mortality. Analysis of circulating cell-free microRNAs present in the serum of cancer patients has emerged as a promising new noninvasive biomarker for early detection of tumors and for predicting their molecular classifications. The rationale for this study was to identify subtype-specific molecular profiles of cell-free microRNAs for early detection of breast cancer in serum. Fifty-four early-stage breast cancers with 27 age-matched controls were selected for circulating microRNAs evaluation in the serum. The 54 cases were molecularly classified (luminal A, luminal B, luminal B Her2 positive, Her-2, triple negative). NanoString platform was used for digital detection and quantitation of 800 tagged microRNA probes and comparing the overall differences in serum microRNA expression from breast cancer cases with controls. We identified the 42 most significant (P [less than or equal to] 0.05,1.5-fold) differentially expressed circulating microRNAs in each molecular subtype for further study. Of these microRNAs, 19 were significantly differentially expressed in patients presenting with luminal A, eight in the luminal B, ten in luminal B HER 2 positive, and four in the HER2 enriched subtype. AUC is high with suitable sensitivity and specificity For the triple negative subtype miR-25-3p had the best accuracy Predictive analysis of the mRNA targets suggests they encode proteins involved in molecular pathways such as cell adhesion, migration, and proliferation. This study identified subtype-specific molecular profiles of cell-free microRNAs suitable for early detection of breast cancer selected by comparison to the microRNA profile in serum for female controls without apparent risk of breast cancer. This molecular profile should be validated using larger cohort studies to confirm the potential of these miRNA for future use as early detection biomarkers that could avoid unnecessary biopsy in patients with a suspicion of breast cancer."

var abstract19 = "This study assesses outcome in terms of disease-free survival (DFS) and overall survival (OS) of special types of triple-negative breast cancer (TNBC). We identified 8801 women with first primary nonmetastatic breast cancer operated on at the European Institute of Oncology between 1997 and 2005. Of these patients, 781 consecutive patients with immunohistochemically defined TNBC were selected for the analyses. We explored patterns of recurrence by histologic type. Median follow-up was 5.7 years (range 0-13 years). The 5-year DFS was 77% for TNBC, 68% for human epidermal growth factor receptor 2 (HER2)-positive breast cancer, and 84% and 95% for luminal B and luminal A breast cancer, respectively. From 781 TNBC subtypes, 693 cases (89%) were classified as ductal not otherwise specified (NOS) (invasive ductal carcinoma [IDC]), 29 were classified as apocrine (3.7%), 18 (2.3%) were classified as lobular, 10 (1.2%) were classified as adenoid cystic, and 10 (1.2%) were classified as metaplastic. Five-year DFS and OS were 77% and 84% for patients with ductal carcinoma, 56% and 89% for patients with metaplastic carcinoma, and both 5-year DFS and OS were 100% for patients with adenoid cystic and medullary carcinomas, respectively. Distinct prognostic implications may derive from the specific histotype of TNBC. The identification of these special types has a significant clinical utility and should be considered in therapeutic algorithms."

var abstract20 = "Molecular subtyping of breast cancer is of considerable interest owing to its potential for personalized therapy and prognosis. However, current methodologies cannot be used for precise subtyping, thereby posing a challenge in clinical practice. The aim of the present study is to develop a cell-specific single-stranded DNA (ssDNA) aptamer-based fluorescence probe for molecular subtyping of breast cancer. Cell-SELEX method was utilized to select DNA aptamers. Flow cytometry and confocal microscopy were used to study the specificity, binding affinity, temperature effect on the binding ability and target type analysis of the aptamers. In vitro and in vivo fluorescence imaging were used to distinguish the molecular subtypes of breast cancer cells, tissue sections and tumor-bearing mice. Six SK-BR-3 breast cancer cell-specific ssDNA aptamers were evolved after successive in vitro selection over 21 rounds by Cell-SELEX. The Kd values of the selected aptamers were all in the low-nanomolar range, among which aptamer sk6 showed the lowest Kd of 0.61 ± 0.14 nM. Then, a truncated aptamer-based probe, sk6Ea, with only 53 nt and high specificity and binding affinity to the target cells was obtained. This aptamer-based probe was able to 1) differentiate SK-BR-3, MDA-MB-231, and MCF-7 breast cancer cells, as well as distinguish breast cancer cells from MCF-10A normal human mammary epithelial cells; 2) distinguish HER2-enriched breast cancer tissues from Luminal A, Luminal B, triple-negative breast cancer tissues, and adjacent normal breast tissues (ANBTs) in vitro; and 3) distinguish xenografts of SK-BR-3 tumor-bearing mice from those of MDA-MB-231 and MCF-7 tumor-bearing mice within 30 min in vivo. The results suggest that the aptamer-based probe is a powerful tool for fast and highly sensitive subtyping of breast cancer both in vitro and in vivo and is also very promising for the identification, diagnosis, and targeted therapy of breast cancer molecular subtypes."

var abstract21 = "Ki67 has been proposed as prognostic proliferation marker in luminal breast cancer (BC), but little is known on the influence of Ki67 assessment methods on subtyping into luminal A- and B-like tumors. Our aim was to study the influence of different Ki67-labeling index (Ki67-LI) assessment methods on the proportion of BCs classified as luminal A-like. 280 early BCs were subtyped according to the St Gallen 2015 definitions into 71 % luminal (HER2 negative), 6 % luminal B-like (HER2 positive), 13 % triple negative, 1 % HER2 positive (nonluminal), and 9 % special type. Digitized whole slides were counted manually on the screen. We used nine defined counting methods to assess the Ki67-LI (including the International Ki67 in Breast Cancer Working Group recommendations), and compared the resulting medians and the proportions of cancers classified as luminal A-like according to the formerly used cut-off <20 %. Methods assessing hot spots and tumor periphery resulted in significantly higher Ki67-LI medians than those measuring an average proliferation (27.45 % vs 16.96 %, p < 0.0001). Substantially lower median Ki67-LI were found when assessing 1020 compared to counting 100, 200, 300 cells (17.65 vs 33 %, vs 28 %, vs 24.33 %, respectively; p < 0.0001), or 510 cells (20.59 %, p = 0.019). Applying a standard Ki67-LI cut-off <20 % to define low proliferation for all methods, the proportion of luminal A-like cancers varied between 13 and 44 %. The proportion of BCs classified as luminal A-like is highly influenced by the Ki67-LI assessment method. As a consequence, the selection of a specific Ki67-LI assessment method may have a direct effect on the proportion of patients considered having low-risk disease and thus influence therapeutic decision making. This calls for a standardized assessment method."

var abstract22 = "Molecular subtyping of triple-negative breast cancers (TNBCs) via gene expression profiling is essential for understanding the molecular essence of this heterogeneous disease and for guiding individualized treatment. We aim to devise a clinically practical method based on immunohistochemistry (IHC) for the molecular subtyping of TNBCs. By analyzing the RNA sequencing data on TNBCs from Fudan University Shanghai Cancer Center (FUSCC) (n = 360) and The Cancer Genome Atlas data set (n = 158), we determined markers that can identify specific molecular subtypes. We performed immunohistochemical staining on tumor sections of 210 TNBCs from FUSCC, established an IHC-based classifier, and applied it to another two cohorts (n = 183 and 214). We selected androgen receptor (AR), CD8, FOXC1, and DCLK1 as immunohistochemical markers and classified TNBCs into five subtypes based on the staining results: (a) IHC-based luminal androgen receptor (IHC-LAR; AR-positive [+]), (b) IHC-based immunomodulatory (IHC-IM; AR-negative [-], CD8+), (c) IHC-based basal-like immune-suppressed (IHC-BLIS; AR-, CD8-, FOXC1+), (d) IHC-based mesenchymal (IHC-MES; AR-, CD8-, FOXC1-, DCLK1+), and (e) IHC‐based unclassifiable (AR-, CD8-, FOXC1-, DCLK1-). The k statistic indicated substantial agreement between the IHC-based classification and mRNA-based classification. Multivariate survival analysis suggested that our IHC-based classification was an independent prognostic factor for relapse-free survival. Transcriptomic data and pathological observations implied potential treatment strategies for different subtypes. The IHC-LAR subtype showed relative activation of HER2 pathway. The IHC-IM subtype tended to exhibit an immune-inflamed phenotype characterized by the infiltration of CD8+ T cells into tumor parenchyma. The IHC-BLIS subtype showed high expression of a VEGF signature. The IHC-MES subtype displayed activation of JAK/STAT3 signaling pathway. We developed an IHC-based approach to classify TNBCs into molecular subtypes. This IHC-based classification can provide additional information for prognostic evaluation. It allows for subgrouping of TNBC patients in clinical trials and evaluating the efficacy of targeted therapies within certain subtypes."

var abstract23 = "Triple-negative breast cancer (TNBC) heterogeneity represents one of the main obstacles to precision medicine for this disease. Recent concordant transcriptomics studies have shown that TNBC could be divided into at least three subtypes with potential therapeutic implications. Although a few studies have been conducted to predict TNBC subtype using transcriptomics data, the subtyping was partially sensitive and limited by batch effect and dependence on a given dataset, which may penalize the switch to routine diagnostic testing. Therefore, we sought to build an absolute predictor (i.e., intra-patient diagnosis) based on machine learning algorithms with a limited number of probes. To that end, we started by introducing probe binary comparison for each patient (indicators). We based the predictive analysis on this transformed data. Probe selection was first involved combining both filter and wrapper methods for variable selection using cross-validation. We tested three prediction models (random forest, gradient boosting [GB], and extreme gradient boosting) using this optimal subset of indicators as inputs. Nested cross-validation consistently allowed us to choose the best model. The results showed that the fifty selected indicators highlighted the biological characteristics associated with each TNBC subtype. The GB based on this subset of indicators performs better than other models."

var abstract24 = "Mammography and ultrasound are the gold standard imaging techniques for preoperative assessment and for monitoring the efficacy of neoadjuvant chemotherapy in breast cancer. Maximum accuracy in predicting pathological tumor size non-invasively is critical for individualized therapy and surgical planning. We therefore aimed to assess the accuracy of tumor size measurement by ultrasound and mammography in a multicentered health services research study. We retrospectively analyzed data from 6543 patients with unifocal, unilateral primary breast cancer. The maximum tumor diameter was measured by ultrasound and/or mammographic imaging. All measurements were compared to final tumor diameter determined by postoperative histopathological examination. We compared the precision of each imaging method across different patient subgroups as well as the method-specific accuracy in each patient subgroup. Overall, the correlation with histology was 0.61 for mammography and 0.60 for ultrasound. Both correlations were higher in pT2 cancers than in pT1 and pT3. Ultrasound as well as mammography revealed a significantly higher correlation with histology in invasive ductal compared to lobular cancers (p < 0.01). For invasive lobular cancers, the mammography showed better correlation with histology than ultrasound (p = 0.01), whereas there was no such advantage for invasive ductal cancers. Ultrasound was significantly superior for HR negative cancers (p < 0.001). HER2/neu positive cancers were also more precisely assessed by ultrasound (p < 0.001). The size of HER2/neu negative cancers could be more accurately predicted by mammography (p < 0.001). This multicentered health services research approach demonstrates that predicting tumor size by mammography and ultrasound provides accurate results. Biological tumor features do, however, affect the diagnostic precision."

var abstract25 = "Breast cancer is heterogeneous in prognoses and drug responses. To organize breast cancers by gene expression independent of statistical methodology, we identified the Breast Cancer Consensus Subtypes (BCCS) as the consensus groupings of six different subtyping methods. Our classification software identified seven BCCS subtypes in a study cohort of publicly available data (n = 5950) including METABRIC, TCGA-BRCA, and data assayed by Affymetrix arrays. All samples were fresh-frozen from primary tumors. The estrogen receptor-positive (ER+) BCCS subtypes were: PCS1 (18%) good prognosis, stromal infiltration; PCS2 (15%) poor prognosis, highly proliferative; PCS3 (13%) poor prognosis, highly proliferative, activated IFN-gamma signaling, cytotoxic lymphocyte infiltration, high tumor mutation burden; PCS4 (18%) good prognosis, hormone response genes highly expressed. The ER- BCCS subtypes were: NCS1 (11%) basal; NCS2 (10%) elevated androgen response; NCS3 (5%) cytotoxic lymphocyte infiltration; unclassified tumors (9%). HER2+ tumors were heterogeneous with respect to BCCS."

//var abstracts = [abstract1, abstract2, abstract3, abstract4, abstract5, abstract6, abstract7, abstract8, abstract9, abstract10, abstract11, abstract12, abstract13, abstract14, abstract15, abstract16, abstract17, abstract18, abstract19, abstract20, abstract21, abstract22, abstract23, abstract24, abstract25]
var abstracts = localAbstracts
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var textFileUrl = null;
// Function for generating a text file URL containing given text
function generateTextFileUrl(txt) {
    let fileData = new Blob([txt], {type: 'text/plain'});
    // If a file has been previously generated, revoke the existing URL
    textFileUrl = window.URL.createObjectURL(fileData);
    // Returns a reference to the global variable holding the URL
    // Again, this is better than generating and returning the URL itself from the function as it will eat memory if the file contents are large or regularly changing
    console.log(textFileUrl)
    return textFileUrl;
};
// Generate the file download URL and assign it to the link
// Wait until the page has loaded! Otherwise the download link element will not exist


function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

function removeEntity(identifier){
	$('[data-entity-id-marked="'+identifier+'"]')[0].outerHTML = $('[data-entity-id-marked="'+identifier+'"]')[0].innerHTML;
	$('[data-entity-id-JSON="'+identifier+'"]')[0].outerHTML = "";
}


function RefreshData(){
	var annotationRawData = localStorage.getItem("spacy-annotation-raw-data");
	if(annotationRawData == null){
		localStorage.setItem("spacy-annotation-raw-data","");
		annotationRawData = ""
	}
	var annotationCompletedData = localStorage.getItem("spacy-annotation-completed-data");
	if(annotationCompletedData == null){
		localStorage.setItem("spacy-annotation-completed-data","");
		annotationCompletedData = ""
	}
	var numberOfSamples = localStorage.getItem("spacy-annotation-sample-count");
	if(numberOfSamples == null || numberOfSamples == 0){
		localStorage.setItem("spacy-annotation-sample-count","");
		numberOfSamples = 1;
	}
	$("#raw-data-div").html(annotationRawData);
	var remainingSampleData = $("#raw-data-div div").length;
	$("#completion-percent").attr("value",(numberOfSamples-remainingSampleData)/numberOfSamples*100);
	$("#annotation-text").html($(".raw-data-row:first-child").html());
	$("#completed-data-div").html(annotationCompletedData);
	$("#annotation-ner").html(localStorage.getItem("spacy-annotation-entity-names"));
}

function prepareJSONData(){
	$(".JSONdelete").html("");
	var JSONOutContents = $("#JSON-out").text();
	JSONOutContents = JSONOutContents.substring(0, JSONOutContents.length - 1);
	var annotationSentence = document.getElementById("annotation-text").innerHTML
	var JSONData = "(\""+annotationSentence+"\",{\"entities\":["+JSONOutContents+"]}),";
	return(JSONData);
}
/*
{'AMINO_ACID',
 'ANATOMICAL_SYSTEM',
 'CANCER',
 'CELL',
 'CELLULAR_COMPONENT',
 'DEVELOPING_ANATOMICAL_STRUCTURE',
 'GENE_OR_GENE_PRODUCT',
 'IMMATERIAL_ANATOMICAL_ENTITY',
 'MULTI-TISSUE_STRUCTURE',
 'ORGAN',
 'ORGANISM',
 'ORGANISM_SUBDIVISION',
 'ORGANISM_SUBSTANCE',
 'PATHOLOGICAL_FORMATION',
 'SIMPLE_CHEMICAL',
 'TISSUE'}
*/
function addEntity(entityNameValue){
  //var entityNameValue = $("#add-entity-value").val();
  $("#annotation-ner").append("<button class = 'ner-button' style='background-color:rgb("+getRandomInt(128,255)+","+getRandomInt(128,255)+","+getRandomInt(128,255)+");'>"+entityNameValue+"</div>");
  localStorage.setItem("spacy-annotation-entity-names",$("#annotation-ner").html());
  RefreshData();
}

function clearEntities(){
  localStorage.setItem("spacy-annotation-entity-names","");
  RefreshData();
}

function initiateEntities(){
  var entities = ["Gene", "Disease", "Subtype", "Organ", "Gene Product", "Chemical", "Species", "Mutation", "Cell Line", "Cell Type", "DNA", "RNA"]
  //var entities = ['Disease', 'Subtype', 'Gene', 'Organ', 'Gene Product/Protein']
  for (let i = 0; i < entities.length; i++) {
    addEntity(entities[i])
  }
}

function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false);
  xmlHttpReq.send(null);
  return xmlHttpReq.response;
}

function pasteRawData(pastedData){
  var rawDataArray = pastedData.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  var numberOfSamples = rawDataArray.length;
  localStorage.setItem("spacy-annotation-sample-count",numberOfSamples);
  var preparedRawData = "";
  rawDataArray.forEach(function(rawData){
    preparedRawData += "<div class = 'raw-data-row'>"+rawData.replace(/[^\x00-\x7F]/g, "").replace(/\"/g,"")+"</div>"
  });
  localStorage.setItem("spacy-annotation-raw-data",preparedRawData);
  $("#raw-data-div").html(localStorage.getItem("spacy-annotation-raw-data"));
  //$("#annotation-text").html($(".raw-data-row:first-child").html());
  RefreshData();
}

function paramHandler(urlParams){
  if (urlParams.has('paper')){
    var paperId = parseInt(urlParams.get('paper'));
    var txt = abstracts[paperId-1];
    pasteRawData(txt);
  } else if (urlParams.has('pubmedID')){
    var id = urlParams.get('pubmedID');
    var url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=' + id + '&retmode=text&rettype=xml';
    //var url = 'https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=GetRecord&identifier=oai:pubmedcentral.nih.gov:' + id + '&metadataPrefix=pmc_fm'
    console.log(url);
    var meta = $(httpGet(url));
    var txt = meta.find('AbstractText').text();
    pasteRawData(txt);
    //pasteRawData()
  }

}

$(document).ready(function(){

	RefreshData();
  clearEntities();
  initiateEntities();
  console.log(localAbstracts)
  document.getElementById("raw-data-div").innerHTML = ""
  document.getElementById("annotation-text").innerHTML = ""
  document.getElementById("completed-data-div").innerHTML = ""
  document.getElementById("download-annotations").removeAttribute("href");
  document.getElementById("download-annotations").removeAttribute("download");
  var queryString = window.location.href.split('?')[1];
  console.log(queryString)
  var urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get('pubmedID'))
  paramHandler(urlParams)

	$("#add-entity-button").on("click",function(){
		var entityNameValue = $("#add-entity-value").val();
		$("#annotation-ner").append("<button class = 'ner-button' style='background-color:rgb("+getRandomInt(128,255)+","+getRandomInt(128,255)+","+getRandomInt(128,255)+");'>"+entityNameValue+"</div>");
		localStorage.setItem("spacy-annotation-entity-names",$("#annotation-ner").html());
		RefreshData();
	 } );
	$(document).on("click",".ner-button",function(){
		var entityText = window.getSelection().toString();
		var entityTextLength = entityText.length;
		var entityType = this.innerHTML;
		var sel = window.getSelection();
		if (sel.rangeCount) {
			var range = sel.getRangeAt(0);
			var entityID = Math.round(Math.random()*1000000000000).toString();
			var caretPos = getCaretCharacterOffsetWithin(document.getElementById("annotation-text"));
			var nodeText = "<div id='ner-div' data-entity-id-marked = '"+entityID+"' style='background-color:"+this.style.backgroundColor+"'>"+entityText+"</div>";
			document.execCommand("insertHTML",false,nodeText);
		}
		var entityStartPosition = caretPos - entityTextLength;
		var entityEndPosition = caretPos
		console.log(entityText,(entityStartPosition+1),entityEndPosition);
		$("#JSON-out").append("<div data-entity-id-JSON = '"+entityID+"' class='entity-JSON' style='background-color:"+this.style.backgroundColor+"'>("+(entityStartPosition)+","+entityEndPosition+",\""+entityType+"\"),<div data-entity-id-jsonx = '"+entityID+"' class='JSONdelete'>x</div></div>");
	});
	$(document).on("dblclick","#ner-div",function(){
		removeEntity($(this).data("entity-id-marked"));
	});
	$(document).on("click",".JSONdelete",function(){
		removeEntity($(this).data("entity-id-jsonx"));
	});
	$("#raw-data-div").bind("paste",function(e){
		var pastedData = e.originalEvent.clipboardData.getData('text');
		e.preventDefault();
		//alert(pastedData);
		var rawDataArray = pastedData.split("\n");
		var numberOfSamples = rawDataArray.length;
		localStorage.setItem("spacy-annotation-sample-count",numberOfSamples);
		var preparedRawData = "";
		rawDataArray.forEach(function(rawData){
			preparedRawData += "<div class = 'raw-data-row'>"+rawData.replace(/[^\x00-\x7F]/g, "").replace(/\"/g,"")+"</div>"
		});
		localStorage.setItem("spacy-annotation-raw-data",preparedRawData);
		$("#raw-data-div").html(localStorage.getItem("spacy-annotation-raw-data"));
		//$("#annotation-text").html($(".raw-data-row:first-child").html());
		RefreshData();
	});
	$("#mark-complete-button").on("click",function(){
		var annotationCompletedData = localStorage.getItem("spacy-annotation-completed-data");
    console.log(annotationCompletedData)
    console.log(updatedRawData)
    console.log( localStorage.getItem("spacy-annotation-completed-data"))
		localStorage.setItem("spacy-annotation-completed-data",prepareJSONData()+"<br/>"+annotationCompletedData);
    console.log( localStorage.getItem("spacy-annotation-completed-data"))
		$(".raw-data-row:first-child").remove();
		$("#JSON-out").html("");
		var updatedRawData = $("#raw-data-div").html();
    console.log(annotationCompletedData)
    console.log(updatedRawData)
		localStorage.setItem("spacy-annotation-raw-data",updatedRawData);
		RefreshData();
	});
	$("#clear-raw").on("click",function(){
		localStorage.setItem("spacy-annotation-raw-data","");
    document.getElementById("annotation-text").innerHTML = ""
		RefreshData();
	});
	$("#clear-completed").on("click",function(){
		localStorage.setItem("spacy-annotation-completed-data","");
		RefreshData();
	});
	$("#clear-entity-button").on("click",function(){
		localStorage.setItem("spacy-annotation-entity-names","");
		RefreshData();
	});
	$("#annotation-text").keypress(function(e) {
		e.preventDefault();
	});
  $("#save-completed").on("click",function(){
		var userName = $("#user-name-value").val();
    var data = document.getElementById("completed-data-div").textContent;
    if (data.length == 0) {
      alert("Annotate some data");
    } else {
      var paperInd = ""
      if (urlParams.has('paper')){
        paperInd = urlParams.get('paper');
      }
      console.log("Preparing Download")
      console.log(userName)
      console.log(paperInd)
      document.getElementById('download-annotations').href = generateTextFileUrl(data);
      document.getElementById('download-annotations').download = userName + paperInd + ".txt"
    }
	});
});
