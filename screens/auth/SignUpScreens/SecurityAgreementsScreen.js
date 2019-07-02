
import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { PrimaryButton, SecondaryButton } from './../../../components/AppComponents';
import { styles } from './style'

export default class Second extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
    };


    render() {
        return (
            <ScrollView style={styles.container_scroll}>

                <Text style={styles.header}>Security Agreements</Text>
                <Text style={styles.text_scroll}>{'\n'}Declaration of Consent
                {'\n'}{'\n'}1. Data Use and Security
                {'\n'}{'\n'}The collection of personal data solely includes your e-mail address. We will save and use your e-mail address to send you the download link of the study app and - based on your preference - to send you daily reminders of the daily exercises via e-mail. At the end of the study, we will use your e-mail address to organize the study compensation. Six months after study completion, we will delete your email address. All study data which is assessed by questionnaires and meta data on the Contenance app use (e.g., time stamps of login/logout) is saved using a study pseudonym (e.g., 1001). No other smartphone-related meta data is assessed.
                {'\n'}{'\n'}Legal basis
                {'\n'}{'\n'}The legal basis for processing your personal data is your voluntary consent in accordance with Art. 6 para. 1 lit. a DSGVO, or Art. 9 paragraph. 2 lit. a DSGVO, as far as special categories of personal data are concerned. The data protection regulations are complied with at all times. In addition, we work on the basis of the Declaration of Helsinki (Declaration of the World Medical Association on the Ethical Principles for Medical Research on Human Beings) and the Guideline for Good Clinical Practice and comply with the recommendations of the German Research Foundation (DFG) to ensure good scientific practice.
                {'\n'}{'\n'}Data storage and access
                {'\n'}{'\n'}All your data will be kept strictly confidential in accordance with the provisions of the „Bundesdatenschutzgesetz“. All study data will be stored in pseudonymized form and will be evaluated and published in anonymous form, i.e. without linking study data to your e-mail address. The results do not allow drawing any conclusions who provided which information. The storage time of your personal data (i.e., your e-mail address) will be 6 month. All other data will be stored for 10 years as requested by the Deutsche Forschungsgemeinschaft.
                {'\n'}{'\n'}Publication
                {'\n'}{'\n'}The publication of the research results in publications or at conferences takes place exclusively in anonymous form in such a way that you cannot be identified as a person.
                {'\n'}{'\n'}You have the following rights with regard to your personal data:
                {'\n'}{'\n'}Consent to the processing of personal data and right to revoke consent
                {'\n'}{'\n'}The processing of your personal data is only legal with your consent. You are not obliged to consent to the processing; the consent is voluntary. In addition, you have the right to revoke your consent to the processing of personal data at any time (as long as the data is not available in anonymous form). Refusal or revocation of your consent will not result in any legal disadvantages for you. The revocation of your consent will result in the processing of the personal data concerned becoming inadmissible for the future in accordance with the revocation declaration. This does not affect the legality of the processing carried out until the revocation.
                {'\n'}{'\n'}Right of disclosure
                {'\n'}{'\n'}You have the right to obtain information about the personal data concerning you which is collected, processed or, if necessary, passed on to third parties in our working group (Art. 15 DSGVO). 
                {'\n'}{'\n'}Right of correction
                {'\n'}{'\n'}You have the right to have incorrect personal data concerning your individual corrected (Art. 16 DSGVO).
                {'\n'}{'\n'}Right of deletion
                {'\n'}{'\n'}Under the legal requirements, you have the right to delete personal data concerning you (Art. 17 DSGVO), e.g. if these data are no longer necessary for the purpose for which they were collected and there are no legal storage periods to prevent their deletion or you have withdrawn your consent and there is no other legal basis for the processing. Anonymised data can no longer be deleted because no connection between data and person can be established.
                {'\n'}{'\n'}Right of restriction of processing
                {'\n'}{'\n'}You have the right to require the controller to restrict the processing if one of the conditions of Art. 18 (1) DSGVO applies.
                {'\n'}{'\n'}Right of objection
                {'\n'}{'\n'}You have the right to object to the processing of your personal data. 
                {'\n'}{'\n'}Right of data transferability
                {'\n'}{'\n'}Under the conditions of Art. 20 paragraph 1 DSGVO, you have the right to data transferability.
                {'\n'}{'\n'}Right of complaint
                {'\n'}{'\n'}You have the right to file a complaint with a Member State supervisory authority if there are doubts as to the legality of the processing of your personal data. The responsible regulatory authority for the Humboldt-Universität zu Berlin is the Berlin Commissioner for Data Protection and Freedom of Information. Irrespective of this complaint right, you can contact the Data Protection Officer of the Humboldt-Universität zu Berlin, Tel: +49 (30) 2093-20022, e-mail: daten-schutz@uv.hu-berlin.de, at any time if you have any questions regarding data protection law.
                {'\n'}{'\n'}2. Declaration of consent
                {'\n'}{'\n'}I have been informed of the purpose, meaning and scope of the planned study. I have read and understood the study website and the data use and security document. My current physical condition does not prohibit participation in the study. I have been made aware that my participation is voluntary and that I can revoke my consent to participate at any time and without giving reasons for the future. If I refuse or revoke my consent to participate, this will not result in any disadvantages for me. In the event of revocation, my personal data will be deleted in accordance with its provisions, unless statutory provisions provide otherwise (e.g. anonymization, blocking in the case of compulsory storage). If I discontinue the study before the end, I will receive the corresponding number of “Versuchspersonenmarken” for the time spent until then. I am not eligible for the lottery of the 25€ online shop vouchers, nor getting a free lifetime access to the Contenance App.
                {'\n'}{'\n'}I agree that the data collected in the context of this study on my person, the self-reported data that I have filled out in the questionnaires and the data of the app use tracking will be recorded, processed and published in anonymous form on electronic data carriers, as described in the above-mentioned information. I can object to the further processing of my data until the data has been consolidated at group level. Until this time I can also demand the deletion or destruction of the data. All data will be deleted after ten years of proof as required by the German Research Foundation (DFG) and required by law. I have understood that personal data is collected for scientific studies. The disclosure, storage and evaluation of this study-related data is carried out in accordance with legal provisions and requires my voluntary consent before participation in the study.
                {'\n'}{'\n'}For any further questions please contact the study lead Christina Roitzheim (+49 176 5885 5646, hello@notlessbutbetter.com).
                {'\n'}{'\n'}I hereby declare my voluntary consent to participate in the planned study and to process my data as part of the study as described before.</Text>

            </ScrollView>
        );
    }
}