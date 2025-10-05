import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [limite, setLimite] = useState(2500);
  const [estudante, setEstudante] = useState(false);

  const [contaAberta, setContaAberta] = useState<null | {
    nome: string;
    idade: number;
    sexo: string;
    limite: number;
    estudante: string;
  }>(null);

  const isNomeValid = nome.trim() !== '';
  const idadeNumber = Number(idade);
  const isIdadeValid = !isNaN(idadeNumber) && idadeNumber >= 18;
  const isSexoValid = sexo !== '';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Text style={styles.title}>Abrir Conta Bancária</Text>
          <Text style={styles.subtitle}>
            Preencha o formulário para simular a abertura da sua conta.
          </Text>
          {/* Nome */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.fieldLabel}>
              <Text style={styles.fieldLabel}>Nome Completo</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  !isNomeValid && nome !== '' && styles.inputError,
                ]}
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome"
                placeholderTextColor="#94a3b8"
              />
            </View>
            {!isNomeValid && nome !== '' && (
              <Text style={styles.errorText}>O nome é obrigatório.</Text>
            )}
          </View>
          {/* Idade */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.fieldLabel}>
              <Text style={styles.fieldLabel}>Idade</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  !isIdadeValid && idade !== '' && styles.inputError,
                ]}
                value={idade}
                onChangeText={setIdade}
                placeholder="Sua idade (mín. 18)"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
              />
            </View>
            {!isIdadeValid && idade !== '' && (
              <Text style={styles.errorText}>
                Idade deve ser um número igual ou superior a 18 anos.
              </Text>
            )}
          </View>
          {/* Sexo (Picker/Select) */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.fieldLabel}>
              <Text style={styles.fieldLabel}>Sexo</Text>
              <Text style={styles.required}>*</Text>
            </View>
            <View>
              <Picker
                selectedValue={sexo}
                style={styles.select}
                onValueChange={setSexo}
              >
                <Picker.Item label="Selecione o sexo..." value="" color="#94a3b8" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
            {!isSexoValid && (
              <Text style={styles.errorText}>
                A seleção de sexo é obrigatória.
              </Text>
            )}
          </View>
          {/* Limite da Conta (Slider) */}
          <View style={styles.sliderContainer}>
            <View style={styles.sliderLabel}>
              <Text style={styles.fieldLabel}>Limite da Conta</Text>
              <Text style={styles.sliderValue}>{formatCurrency(limite)}</Text>
            </View>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={500}
              maximumValue={10000}
              step={100}
              value={limite}
              onValueChange={setLimite}
              minimumTrackTintColor="#2563eb"
              maximumTrackTintColor="#dbeafe"
              thumbTintColor="#2563eb"
            />
            <View style={styles.sliderMinMax}>
              <Text>{formatCurrency(500)}</Text>
              <Text>{formatCurrency(10000)}</Text>
            </View>
          </View>
          {/* Estudante? (Switch) */}
          <View style={styles.switchContainer}>
            <Text style={styles.fieldLabel}>É Estudante?</Text>
            <Switch
              value={estudante}
              onValueChange={setEstudante}
              trackColor={{ false: '#e5e7eb', true: '#2563eb' }}
              thumbColor={estudante ? '#fff' : '#f4f3f4'}
            />
          </View>
          {/* Botão Abrir Conta */}
          <Text
            style={[
              styles.button,
              !(isNomeValid && isIdadeValid && isSexoValid) && styles.buttonDisabled,
            ]}
            onPress={() => {
              if (isNomeValid && isIdadeValid && isSexoValid) {
                setContaAberta({
                  nome,
                  idade: idadeNumber,
                  sexo,
                  limite,
                  estudante: estudante ? 'Sim' : 'Não',
                });
              }
            }}
            disabled={!(isNomeValid && isIdadeValid && isSexoValid)}
          >
            {isNomeValid && isIdadeValid && isSexoValid
              ? 'Abrir Conta'
              : 'Preencha todos os campos obrigatórios'}
          </Text>
          {contaAberta && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>
                Conta Aberta com Sucesso!
              </Text>
              <View style={styles.resultBox}>
                <View style={styles.resultRow}>
                  <Text style={{ color: '#64748b', fontWeight: '600' }}>Nome:</Text>
                  <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>{contaAberta.nome}</Text>
                </View>
                <View style={styles.resultRow}>
                  <Text style={{ color: '#64748b', fontWeight: '600' }}>Idade:</Text>
                  <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>{contaAberta.idade} anos</Text>
                </View>
                <View style={styles.resultRow}>
                  <Text style={{ color: '#64748b', fontWeight: '600' }}>Sexo:</Text>
                  <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>{contaAberta.sexo}</Text>
                </View>
                <View style={styles.resultRow}>
                  <Text style={{ color: '#64748b', fontWeight: '600' }}>Estudante:</Text>
                  <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>{contaAberta.estudante}</Text>
                </View>
                <View style={styles.resultRowLast}>
                  <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>Limite de Crédito:</Text>
                  <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>
                    {formatCurrency(contaAberta.limite)}
                  </Text>
                </View>
              </View>
              <Text
                style={styles.closeButton}
                onPress={() => setContaAberta(null)}
              >
                Fechar Resumo
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 32,
    marginBottom: 32,
  },
  // ...restante dos estilos igual...
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
    paddingBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  required: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  input: {
    width: '100%',
    padding: 12,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#ef4444',
    backgroundColor: '#fef2f2',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: '50%',
    marginTop: -12,
    width: 24,
    height: 24,
    color: '#94a3b8',
  },
  errorText: {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  select: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#0f172a',
  },
  selectPlaceholder: {
    color: '#94a3b8',
  },
  sliderContainer: {
    paddingTop: 8,
  },
  sliderLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: '100%',
    height: 4,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    marginTop: 8,
  },
  sliderValue: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  sliderMinMax: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    fontSize: 12,
    color: '#64748b',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginTop: 8,
  },
  button: {
    width: '100%',
    marginTop: 32,
    padding: 16,
    borderRadius: 16,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#2563eb',
    textAlign: 'center',
    shadowColor: '#2563eb',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: '#94a3b8',
  },
  resultContainer: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#bae6fd',
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultBox: {
    padding: 16,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#bbf7d0',
    marginBottom: 12,
    shadowColor: '#16a34a',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 4,
    marginBottom: 4,
    fontSize: 14,
  },
  resultRowLast: {
    borderBottomWidth: 0,
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  closeButton: {
    width: '100%',
    marginTop: 16,
    padding: 10,
    fontSize: 14,
    color: '#2563eb',
    borderWidth: 1,
    borderColor: '#2563eb',
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#f0f9ff',
  },
});
